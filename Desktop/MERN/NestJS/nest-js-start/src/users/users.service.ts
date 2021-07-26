import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotosEntity } from 'src/photos/entities/photos.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { UsersEntity } from './entities/users.entity';
import { User } from './interfaces/user';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository:Repository<UsersEntity>,
        @InjectRepository(PhotosEntity)
       private readonly photosRepository:Repository<PhotosEntity>,

    ){}
    async create(user:CreateUserDTO):Promise<User> {
       
        return await this.usersRepository.save(user);
        // let savedPhotos=[];
        // if(Array.isArray(user.photos) && user.photos.length){
        //    //first save the photos
        //     savedPhotos=await this.photosRepository.save(user.photos)
        // }
        // //then create user
        // const savedUser=new UsersEntity();
        // savedUser.email=user.email;
        // savedUser.password=user.password;
        // //set the photos
        // savedUser.photos=savedPhotos;
        // //save the users
        // await this.usersRepository.save(savedUser);
        // return{...savedUser,photos:savedPhotos}
          }

          async findAll():Promise<User[]>{
              return await this.usersRepository.find({relations:['photos']});
          }

          async findOne(id:number):Promise<User>{
             const results=  await this.usersRepository.findOne(id,{relations:['photos']})
             if(!results){
                 throw new NotFoundException('could not find any product')
             }
             return results;
          }

          async delete(id:number):Promise<DeleteResult>{
                
                    return await this.usersRepository.delete(id)
                    
               
               // return {msg:`user is deleted with id ${userId} and photo is deleted with id ${photoId}`}
          }

          async update(id:number,user:UpdateUserDTO):Promise<UpdateResult>{
              return await this.usersRepository.update(id,user)
          }

}


