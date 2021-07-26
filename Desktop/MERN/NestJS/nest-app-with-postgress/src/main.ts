import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const options=new DocumentBuilder()
  .setTitle('Fullstack App Backend')
  .setDescription('This is REST API DOCS for our App')
  .setVersion('1.0')
  .build()

  const document =SwaggerModule.createDocument(app,options)
  
  SwaggerModule.setup('docs',app,document)
  await app.listen(3000);
}
bootstrap();
