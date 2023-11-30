import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
@Injectable()
export class UserService {
  async getUserByEmail(email: string): Promise<any> {
    try {
      const user = await admin.auth().getUserByEmail(email);
      return user;
    } catch (error) {
      console.error('Error during user login:', error);
      throw new Error('Login failed: ' + error.message);
    }
  }
}
