import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { SignupRsp, LoginRsp } from './interfaces/user';
import { UsersService } from './users.service';
//import {Request} from 'express'
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private userservice: UsersService) {}
  @Post('signup')
  @ApiCreatedResponse({ description: 'User has successfully created' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async signUp(@Body() user: CreateUserDTO): Promise<SignupRsp> {
    return await this.userservice.signup(user);
  }

  @Post('login')
  @ApiCreatedResponse({ description: 'User has successfully loggedIn' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async login(@Body() user: CreateUserDTO): Promise<LoginRsp> {
    return await this.userservice.login(user);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'User has successfully found the profile',
  })
  @ApiUnauthorizedResponse({ description: 'UnAuthorized' })
  async profile(@Request() req) {
    return req.user;
  }
}
