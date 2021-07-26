import { IsString,IsEmail, IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger'

export class CreateUserDTO{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({
        description:'The user email',
        required:true,
        type:String,
    })
    readonly email:string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description:'The user password',
        required:true,
        type:String,
    })
    readonly password:string;
}