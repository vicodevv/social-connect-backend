import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { createToken } from 'src/utils/createToken';

@Injectable()
export class AuthService {
  /**
   * Resgister a new user
   * @param email The user's email
   * @param password The user's password
   * @returns The user record
   * @throws Error if the user registration fails
   */
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

  /**
   * Login a user
   * @param email The user's email
   * @param password The user's password
   * @returns The user record and the JWT token
   * @throws Error if the user login fails
   */
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
