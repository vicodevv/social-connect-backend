import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from './elasticsearch/elasticsearch.module';
import { AuthService } from './authentication/auth.service';
import { AuthModule } from './authentication/auth.module';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { WebrtcService } from './webrtc/webrtc.service';
import { WebrtcModule } from './webrtc/webrtc.module';
import { RedisModule } from './redis/redis.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ElasticsearchModule,
    AuthModule,
    ChatModule,
    WebrtcModule,
    RedisModule,
    UserModule,
  ],
  controllers: [AppController, ChatController, UserController],
  providers: [AppService, AuthService, WebrtcService, UserService],
})
export class AppModule {}
