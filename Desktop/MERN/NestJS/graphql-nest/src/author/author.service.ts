import { Author } from 'src/graphql';
import { AuthorModule } from './author.module';
import { AuthorInterface } from './author.interface';
import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthorDTO } from './dto/create-author.dto';


@Injectable()
export class AuthorService {
    constructor(
        @InjectModel('Author') private readonly authorModel:Model<AuthorInterface>,
    ){}

    async create(author:CreateAuthorDTO):Promise<AuthorInterface>{
        return await this.authorModel.create(author);
    }

    async find():Promise<AuthorInterface[]>{
        return await this.authorModel.find()
    }

    async findOne(id:string):Promise<AuthorInterface>{
        return await this.authorModel.findById(id)
    }

    async delete(id:string):Promise<string>{
        // const result=await this.authorModel.remove({_id:id});
        const result=await this.authorModel.deleteOne({_id:id});
        console.log(result);
        return `author is deleted with ${id}`;
        
    }

    async update(id:string,author:Author):Promise<AuthorInterface>{
       return await this.authorModel.findByIdAndUpdate({_id:id},author,{new:true})

    }
}

