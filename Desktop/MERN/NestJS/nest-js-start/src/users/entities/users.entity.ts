import { PhotosEntity } from 'src/photos/entities/photos.entity';
import {Entity, PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm'


@Entity({name: 'users'})

export class UsersEntity{
     @PrimaryGeneratedColumn()
     id:number;
     
     @Column()
     email:string;

     @Column()
     password:string;

     @OneToMany(type=>PhotosEntity,photosEntity=>photosEntity.user
          ,{
          cascade:['insert','update'],
          onDelete:"CASCADE"
     }
     )
     photos:PhotosEntity[]


} 