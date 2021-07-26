import {IsNotEmpty,IsString} from 'class-validator'
export class CreatePhotoDTO{
    // @IsNotEmpty()
    // @IsString()
    // readonly id:string;
    @IsNotEmpty()
    @IsString()
    readonly url:string;
}