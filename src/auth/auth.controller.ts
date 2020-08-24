import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Post('token')
  getToken(): string {
    return 'hello';
  }

  @Post('user')
  join(): string {
    return 'join'
  }
}
