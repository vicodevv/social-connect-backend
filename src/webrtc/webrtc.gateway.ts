import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { WebRTCService } from './webrtc.service';

@WebSocketGateway()
export class WebRTCGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly webrtcService: WebRTCService) {}

  @SubscribeMessage('createMeeting')
  handleCreateMeeting(): void {
    const roomId = this.webrtcService.generateUniqueRoomId();
    this.server.emit('meetingCreated', roomId);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client: Socket, payload: { roomId: string }): void {
    const { roomId } = payload;
    this.webrtcService.joinRoom(roomId, client);
    client.emit(
      'roomParticipants',
      this.webrtcService.getRoomParticipants(roomId),
    );
  }

  // @SubscribeMessage('leaveRoom')
  // handleLeaveRoom(client: Socket, payload: { roomId: string }): void {
  //   const { roomId } = payload;
  //   this.webrtcService.leaveRoom(roomId, client);
  //   client.emit(
  //     'roomParticipants',
  //     this.webrtcService.getRoomParticipants(roomId),
  //   );
  // }
}
