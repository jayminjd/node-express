import { UsersEntity } from 'src/users/entities/users.entity';
import {Entity, PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm'


@Entity({name: 'photos'})

export class PhotosEntity{
     @PrimaryGeneratedColumn()
     id:number;
     
     @Column()
     url:string;
     @ManyToOne(type=>UsersEntity,userEntity=>userEntity.photos
          ,{
               onDelete:"CASCADE"
          })
     user:UsersEntity;
}