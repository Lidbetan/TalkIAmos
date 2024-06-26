import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const port = process.env.PORT || 3001;
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["*"]
  });
  app.setGlobalPrefix("/api")
  app.use('/audio', express.static(join(__dirname, '..', 'audio')));
  await app.listen(port);
}
bootstrap();
