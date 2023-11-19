import { Controller, Get, Body, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get')
  @HttpCode(200)
  async getUserByEmail(@Body() { email }: { email: string }) {
    try {
      const user = await this.userService.getUserByEmail(email);
      return user;
    } catch (error) {
      console.error('Error during user login:', error);
      throw new Error('Login failed: ' + error.message);
    }
  }
}
