
import {isArray, IsEmail, IsNotEmpty,IsString,IsArray, IsOptional, IsInt} from 'class-validator'
import { PhotosEntity } from 'src/photos/entities/photos.entity';


export class UpdateUserDTO{
    // @IsNotEmpty()
    // @IsString()
    // readonly id:string;
    @IsOptional()
    @IsString()
    @IsEmail()
    readonly email:string;

    @IsOptional()
    @IsString()
    readonly password:string;
}
