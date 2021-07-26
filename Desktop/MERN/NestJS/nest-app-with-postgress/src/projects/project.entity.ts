import { CrudValidationGroups } from "@nestjsx/crud";
import { IsBoolean, IsDefined, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Company } from "../companies/company.entity";
import {  Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import {BaseEntity} from '../base-entity'

const {CREATE,UPDATE} =CrudValidationGroups;

@Entity()
export class Project extends BaseEntity {
    @IsOptional({groups:[UPDATE]})
    @IsDefined({groups:[CREATE]})
    @IsString({always:true})
    @MaxLength(100,{always:true})
    @Column({type:'varchar',length:100,nullable:false,unique:true})
    name:string;

    @IsOptional({always:true})
    @IsBoolean({always:true})
    @Column({type:'boolean',default:true})
    isActive:Boolean;

    @IsOptional({always:true})
    @Column({type:'text',nullable:true})
    description:string;
    
    @IsOptional({always:true})
    @IsNumber({},{always:true})
    @Column({nullable:false})
    companyId?:number;

    //relation
    @ManyToOne(type=>Company,company=>company.projects)
    company:Company;

}
