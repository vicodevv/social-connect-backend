import { Module } from '@nestjs/common';
import { WebRTCController } from './webrtc.controller';
import { WebRTCGateway } from './webrtc.gateway';
import { WebRTCService } from './webrtc.service';

@Module({
  controllers: [WebRTCController],
  providers: [WebRTCGateway, WebRTCService],
})
export class WebRTCModule {}
