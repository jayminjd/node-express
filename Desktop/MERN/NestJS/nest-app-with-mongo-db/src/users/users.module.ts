import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordHasherService } from './auth/password-hasher.service';
import { UserSchema } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {JwtModule} from '@nestjs/jwt'
import { jwtConstants } from './constants/jwt.constants';
import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service';
@Module({
  imports:[
  JwtModule.register({secret:jwtConstants.secret}),
  MongooseModule.forFeature([{name:'Users',schema:UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService,PasswordHasherService,JwtStrategyService]
})
export class UsersModule {}
