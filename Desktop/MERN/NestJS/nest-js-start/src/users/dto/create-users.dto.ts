import {isArray, IsEmail, IsNotEmpty,IsString,IsArray} from 'class-validator'
import { PhotosEntity } from 'src/photos/entities/photos.entity';
export class CreateUserDTO{
    // @IsNotEmpty()
    // @IsString()
    // readonly id:string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    readonly password:string;

    @IsArray()
    photos:PhotosEntity[];
}