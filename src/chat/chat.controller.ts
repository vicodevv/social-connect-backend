// chat.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateMessageDto } from '../dto/create-message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':roomId')
  async getChatMessages(@Param('roomId') roomId: string) {
    return this.chatService.getChatMessages(roomId);
  }

  @Post(':roomId')
  async sendMessage(
    @Param('roomId') roomId: string,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    return this.chatService.sendMessage(roomId, createMessageDto);
  }
}
