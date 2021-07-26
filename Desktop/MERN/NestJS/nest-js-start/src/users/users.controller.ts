import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { User } from './interfaces/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userservice: UsersService){}
    @Post()
    async create(@Body() user:CreateUserDTO):Promise<User>{
        return await this.userservice.create(user);
       // return 'NEW PRODUCT ENDPOINT';
    }

    @Get()
    async findAll():Promise<User[]>{
        return await this.userservice.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id):Promise<User>{
        return await this.userservice.findOne(+id)
    }

    @Delete(':id')
    async delete(@Param('id') id):Promise<DeleteResult>{
        return await this.userservice.delete(+id)
    }
    @Put(':id')
    async update(@Param('id') id,@Body() user:UpdateUserDTO):Promise<UpdateResult>{
        return await this.userservice.update(id,user)
    }

}
