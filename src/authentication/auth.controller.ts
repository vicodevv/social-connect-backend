import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() { email, password }: { email: string; password: string },
  ) {
    try {
      const userRecord = await this.authService.registerUser(email, password);
      return userRecord;
    } catch (error) {
      console.error('Error during user registration:', error);
      throw new Error('User registration failed: ' + error.message);
    }
  }

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    try {
      const user = await this.authService.loginUser(email, password);
      return user;
    } catch (error) {
      console.error('Error during user login:', error);
      throw new Error('Login failed: ' + error.message);
    }
  }
  // @Post('login')
  // @HttpCode(200)
  // async login(
  //   @Body() { email, password }: { email: string; password: string },
  // ) {
  //   try {
  //     const user = await this.authService.loginUser(email, password);
  //     return user;
  //   } catch (error) {
  //     console.error('Error during user login:', error);
  //     throw new Error('Login failed: ' + error.message);
  //   }
  // }
}
