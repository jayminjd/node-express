import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString, MaxLength, maxLength } from "class-validator";

export class CreateProjectDTO{
    @IsString()
    @ApiProperty()
    @MaxLength(100)
    readonly name:string;

    @IsBoolean()
    @ApiProperty()
    readonly isActive:boolean;
    
    @IsString()
    @ApiProperty()
    readonly description:string;
      
    @IsNumber()
    @ApiProperty()
    readonly companyId:number;


}