import { Crud, CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Project } from '../projects/project.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../base-entity';

const  {CREATE,UPDATE}=CrudValidationGroups;
@Entity('companies')
export class Company extends BaseEntity {
  @IsString()
  @IsNotEmpty({groups:[CREATE]})
  @IsOptional({groups:[UPDATE]})
  @MaxLength(100,{always:true})
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @IsString()
  @IsNotEmpty({groups:[CREATE]})
  @IsOptional({groups:[UPDATE]})
  @MaxLength(100,{always:true})
  @Column({ type: 'varchar', length: 100, nullable: true })
  domain: string;

  @IsString()
  @IsOptional({groups:[UPDATE]})
  @Column({ type: 'text', nullable: true, default: null })
  description: string;

  //relation
  @OneToMany(type=>Project,project=>project.company)
  projects:Project[]

}
