import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as serviceAccount from './config/serviceKey.json';
import * as dotenv from 'dotenv';
dotenv.config();

// Cast serviceAccount to ServiceAccount
const serviceAccountCasted = serviceAccount as admin.ServiceAccount;
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountCasted),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
