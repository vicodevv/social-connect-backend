import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  async registerUser(email: string, password: string): Promise<any> {
    try {
      console.log('Attempting to register user with email:', email);

      const userRecord = await admin.auth().createUser({
        email,
        password,
      });

      console.log('User registration successful:', userRecord);

      return userRecord;
    } catch (error) {
      console.error('Error during user registration:', error);
      throw new Error('User registration failed: ' + error.message);
    }
  }

  async loginUser(email: string, password: string): Promise<any> {
    try {
      console.log('Attempting to login user with email:', email);

      const user = await admin.auth().getUserByEmail(email);

      console.log('User login successful:', user);

      return user;
    } catch (error) {
      console.error('Error during user login:', error);
      throw new Error('Login failed: ' + error.message);
    }
  }
}
