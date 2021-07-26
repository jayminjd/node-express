import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, maxLength } from "class-validator";

export class UpdateProjectDTO{
    @IsString()
    @ApiProperty()
    @MaxLength(100)
    @IsOptional()
    readonly name:string;

    @IsBoolean()
    @ApiProperty()
    @IsOptional()
    readonly isActive:boolean;
    
    @IsString()
    @ApiProperty()
    @IsOptional()
    readonly description:string;
      
    @IsNumber()
    @ApiProperty()
    @IsOptional()
    readonly companyId:number;


}