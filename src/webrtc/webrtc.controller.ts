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

  @Get('join/:roomId') // Use a dynamic parameter for the room ID
  joinMeeting(@Param('roomId') roomId: string): { status: string } {
    // You may want to perform additional logic here, such as checking if the room exists
    // and if it's full before allowing a user to join.

    // For now, simply return a success message.
    return { status: `Joined room ${roomId}` };
  }
}
