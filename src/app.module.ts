import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from './elasticsearch/elasticsearch.module';
import { AuthService } from './authentication/auth.service';
import { AuthModule } from './authentication/auth.module';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { WebRTCService } from './webrtc/webrtc.service';
import { WebRTCModule } from './webrtc/webrtc.module';
import { RedisModule } from './redis/redis.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ChatService } from './chat/chat.service';
import { WebRTCController } from './webrtc/webrtc.controller';
import { WebRTCGateway } from './webrtc/webrtc.gateway';

@Module({
  imports: [
    ElasticsearchModule,
    AuthModule,
    ChatModule,
    WebRTCModule,
    RedisModule,
    UserModule,
  ],
  controllers: [
    AppController,
    ChatController,
    UserController,
    WebRTCController,
  ],
  providers: [
    AppService,
    AuthService,
    WebRTCService,
    ChatService,
    UserService,
    WebRTCGateway,
  ],
})
export class AppModule {}
