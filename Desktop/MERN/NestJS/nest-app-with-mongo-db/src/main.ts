import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const options=new DocumentBuilder()
  .setTitle('Auth example')
  .setDescription('JWT Authentication demo with MongoDB')
  .setVersion('1.9')
  .addTag('users')
  //.addBearerAuth({authorization,Headers})
  .addBearerAuth({ in: 'header', type: 'http', name: 'authorization' })
  .build();
  const document=SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
