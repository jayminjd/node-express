import {IsInt, IsNotEmpty,IsNumber,IsString,IsOptional} from 'class-validator'
export class UpdateProductDTO{
    // @IsNotEmpty()
    // @IsString()
    // readonly id:string;
    @IsOptional()
    @IsString()
    readonly name:string;
    @IsOptional()
    @IsInt()
    readonly qty:number;
    @IsOptional()
    @IsNumber()
    readonly price:number;
}