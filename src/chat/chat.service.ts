// chat.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { CreateMessageDto } from '../dto/create-message.dto';
import * as amqp from 'amqplib';

@Injectable()
export class ChatService {
  private readonly firestore = admin.firestore();
  private readonly rabbitMQUrl = process.env.RABBITMQ_URL;

  async getChatMessages(roomId: string): Promise<any[]> {
    const snapshot = await this.firestore
      .collection(`rooms/${roomId}/messages`)
      .get();
    return snapshot.docs.map((doc) => doc.data());
  }

  async sendMessage(
    roomId: string,
    createMessageDto: CreateMessageDto,
  ): Promise<any> {
    const { senderId, content } = createMessageDto;

    const message = {
      senderId,
      content,
      // Add other fields as needed
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    await this.firestore.collection(`rooms/${roomId}/messages`).add(message);

    // Send the message to RabbitMQ
    this.sendMessageToRabbitMQ(message, roomId);

    return message;
  }

  private async sendMessageToRabbitMQ(
    message: any,
    roomId: string,
  ): Promise<void> {
    const connection = await amqp.connect(this.rabbitMQUrl);
    const channel = await connection.createChannel();

    const exchange = 'chat';
    const routingKey = `room.${roomId}`;

    // Declare exchange
    await channel.assertExchange(exchange, 'direct', { durable: false });

    // Send the message to the exchange with the specific routing key
    await channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message)),
    );

    // Close the connection
    await channel.close();
    await connection.close();
  }
}
