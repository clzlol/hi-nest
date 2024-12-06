import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //데코레이터가 없는 속성은 제거
      forbidNonWhitelisted: true, //whitelist에 없는 속성이 있는 요청에는 400을 보냄
      transform: true, //request의 타입을 원하는 속성으로 바꿔줌
    })
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
