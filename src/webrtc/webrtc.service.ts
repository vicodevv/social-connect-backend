import { Injectable, Logger } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class WebRTCService {
  private readonly logger = new Logger(WebRTCService.name);
  private readonly rooms: Map<string, Set<Socket>> = new Map();
  private readonly usedRoomIds: Set<string> = new Set();

  generateUniqueRoomId(): string {
    let roomId: string;
    do {
      roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    } while (this.usedRoomIds.has(roomId));

    this.usedRoomIds.add(roomId);
    return roomId;
  }

  joinRoom(roomId: string, socket: Socket): void {
    this.logger.log(`User joined room ${roomId}`);

    if (!this.rooms.has(roomId)) {
      this.rooms.set(roomId, new Set());
    }

    const room = this.rooms.get(roomId);
    room.add(socket); 

    socket.join(roomId);
  }

  leaveRoom(roomId: string, socket: Socket): void {
    this.logger.log(`User left room ${roomId}`);

    const room = this.rooms.get(roomId);
    if (room) {
      room.delete(socket);

      if (room.size === 0) {
        this.rooms.delete(roomId);
      }
    }

    socket.leave(roomId);
  }

  getRoomParticipants(roomId: string): number {
    const room = this.rooms.get(roomId);
    return room ? room.size : 0;
  }

  emitToRoom(roomId: string, event: string, data: any): void {
    this.logger.log(`Broadcasting to room ${roomId}: ${event}`);
    this.rooms.get(roomId)?.forEach((socket) => socket.emit(event, data));
  }
}
