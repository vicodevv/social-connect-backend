import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { createToken } from 'src/utils/createToken';

@Injectable()
export class AuthService {
  async registerUser(email: string, password: string): Promise<any> {
    try {
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });
      return userRecord;
    } catch (error) {
      console.error('Error during user registration:', error);
      throw new Error('User registration failed: ' + error.message);
    }
  }

  async loginUser(email: string, password: string): Promise<any> {
    try {
      const user = await admin.auth().getUserByEmail(email);

      const token = createToken(user);
      return {
        ...token,
        user,
      };
    } catch (error) {
      console.error('Error during user login:', error);
      throw new Error('Login failed: ' + error.message);
    }
  }
}
