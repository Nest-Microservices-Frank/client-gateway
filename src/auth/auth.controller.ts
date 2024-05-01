import { Get, Inject } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register')
  registerUser() {
    return this.client.send('auth.register.user', { auth: 'register' });
  }

  @Post('login')
  loginUser() {
    return this.client.send('auth.login.user', { auth: 'login' });
  }

  @Get('verify')
  verifyUser() {
    return this.client.send('auth.verify.user', { auth: 'verify' });
  }
}
