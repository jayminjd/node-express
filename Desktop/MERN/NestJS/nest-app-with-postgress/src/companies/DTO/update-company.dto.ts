import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength, maxLength } from "class-validator";

export class UpdateCompanyDTO{
    @IsString()
    @ApiProperty()
    @MaxLength(100)
    @IsOptional()
    readonly name:string;

    @IsString()
    @ApiProperty()
    @MaxLength(100)
    @IsOptional()
    readonly domain:string;
    
    @IsString()
    @ApiProperty()
    @IsOptional()
    readonly description:string;
}