import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Strategy } from 'passport-openid';
import Passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Passport.use()
  new Strategy()



  await app.listen(3000);
}
bootstrap();
