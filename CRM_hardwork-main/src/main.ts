import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';


async function start() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.use(cookieParser());
  const PORT = config.get<number>('API_PORT') || 3030;
  await app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}
start();
