import { Controller } from '@nestjs/common';
import { WebRTCGateway } from './webrtc.gateway';

@Controller('meetings')
export class WebRTCController {
  constructor(private readonly webrtcGateway: WebRTCGateway) {}

  //   @Get('create')
  //   createMeeting(): { roomId: string } {
  //     const roomId = this.webrtcGateway.handleCreateMeeting();
  //     return { roomId };
  //   }
}
