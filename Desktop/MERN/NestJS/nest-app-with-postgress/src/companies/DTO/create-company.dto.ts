import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, maxLength } from "class-validator";

export class CreateCompanyDTO{
    @IsString()
    @ApiProperty()
    @MaxLength(100)
    readonly name:string;

    @IsString()
    @ApiProperty()
    @MaxLength(100)
    readonly domain:string;
    
    @IsString()
    @ApiProperty()
    readonly description:string;
}