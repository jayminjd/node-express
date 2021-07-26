import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { PhotosController } from './photos/photos.controller';
//import { ServiceModule } from './photos/service.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'root',
      database:'nest-db',
      entities:[__dirname+'/**/*.entity{.ts,.js}'],
      synchronize:true


    }),
    ProductsModule,
    UsersModule,
    PhotosModule,
    QuizModule],
  controllers: [AppController, PhotosController],
  providers: [AppService],
})
export class AppModule {

  constructor(private readonly connection:Connection){
    console.log('connection status',connection.isConnected);
    
  }

  // configure(consumer:MiddlewareConsumer){
  //   //consumer.apply(LoggerMiddleware).forRoutes(ProductsController)
  //   //consumer.apply(LoggerMiddleware).forRoutes({path:'products',method:RequestMethod.GET})
  //   consumer.apply(LoggerMiddleware).exclude({path:'products',method:RequestMethod.GET}).forRoutes(ProductsController)
  // }
}
