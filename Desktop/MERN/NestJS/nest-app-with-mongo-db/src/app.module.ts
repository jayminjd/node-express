import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
//import { AuthService } from './auth/auth.service';

@Module({
  imports: [
   
    //MongooseModule.forRoot('mongodb://localhost/auth-nest-db',{
    MongooseModule.forRoot('mongodb+srv://admin:root123@cluster0.y5edt.mongodb.net/auth-nest-db?retryWrites=true&w=majority',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
