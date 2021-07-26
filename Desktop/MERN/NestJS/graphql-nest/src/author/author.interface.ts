import {Document} from 'mongoose'

export class AuthorInterface extends Document{
    id:number;
    firstName:string;
    lastName:string;
}