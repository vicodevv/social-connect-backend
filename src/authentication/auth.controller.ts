import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() { email, password }: { email: string; password: string },
  ) {
    try {
      console.log('Attempting to register user with email:', email);

      const userRecord = await this.authService.registerUser(email, password);

      console.log('User registration successful:', userRecord);

      return userRecord;
    } catch (error) {
      console.error('Error during user registration:', error);
      throw new Error('User registration failed: ' + error.message);
    }
  }

  @Post('login')
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    try {
      console.log('Attempting to login user with email:', email);

      const user = await this.authService.loginUser(email, password);

      console.log('User login successful:', user);

      return user;
    } catch (error) {
      console.error('Error during user login:', error);
      throw new Error('Login failed: ' + error.message);
    }
  }
}
