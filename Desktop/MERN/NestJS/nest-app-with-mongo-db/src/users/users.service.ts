import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PasswordHasherService } from './auth/password-hasher.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginRsp, SignupRsp, User } from './interfaces/user';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users')
        private readonly userModel:Model<User>,
        private hasherService:PasswordHasherService,
        private jwtService:JwtService,
    ){}
    async signup(doc:CreateUserDTO):Promise<SignupRsp>{

        //if user has allready registered then send error
        const user=await this.userModel.findOne({email:doc.email})
        if(user){
            throw new UnauthorizedException(`user is allready created with this ${doc.email}`);
        }
        //encrypt password
        const encryptUerPassword=await this.hasherService.hashPassword(doc.password);
        const newUser=new this.userModel({email:doc.email,password:encryptUerPassword});
        //save in collection
        await newUser.save();
        return {email:newUser.email}
        //return await newUser.save();
    }

    async login(doc:CreateUserDTO):Promise<LoginRsp>{
        //verify if there is any user with input email in documents
        const user=await this.userModel.findOne({email:doc.email})
        if(!user){
            throw new UnauthorizedException(`user not found with this ${doc.email}`)
        }
        //compare user password to inputed password
        const check=await this.hasherService.comparePassword(doc.password,user.password)

        if(check){
            //generate JWT
            const token=await this.jwtService.signAsync({
                email:user.email,
                id:user._id,
            },
           {
               expiresIn:'1d',
           },
            );
            return {token}
        }
        else{
            throw new UnauthorizedException('invalid password')
        }

    }
    async validateUserById(userId:string):Promise<Boolean>{
        const user=await this.userModel.findById(userId)
       if(user){
        return true;
       }
       else{ 
       return false;
       }
    }
}
