// webrtc.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { WebRTCGateway } from './webrtc.gateway';
import { WebRTCService } from './webrtc.service';

@Controller('meetings')
export class WebRTCController {
  constructor(
    private readonly webrtcService: WebRTCService,
    private readonly webrtcGateway: WebRTCGateway,
  ) {}

  @Get('create')
  createMeeting(): { roomId: string } {
    const roomId = this.webrtcService.generateUniqueRoomId();
    this.webrtcGateway.handleCreateMeeting();
    return { roomId };
  }

  @Get('join/:roomId')
  joinMeeting(@Param('roomId') roomId: string): { status: string } {
    this.webrtcGateway.handleJoinRoom(
      { id: 'socketId' } as any,
      {
        roomId,
      } as any,
    );
    return { status: `Joined room ${roomId}` };
  }
}
