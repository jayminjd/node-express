import { CreateAuthorDTO } from './dto/create-author.dto';
import { AuthorInterface } from './author.interface';
import { AuthorService } from './author.service';
import { Resolver, Query, Context, Args,Parent, Info, Mutation, Root, ResolveProperty } from '@nestjs/graphql';
import { Author } from 'src/graphql';

@Resolver('Author')
export class AuthorResolver {
    constructor(private authorService:AuthorService){}
   // authors:Author[]=[{id:'1',firstName:'jane',lastName:'doe'}];
    @Query()
    async allAuthors():Promise<AuthorInterface[]>{
        return await this.authorService.find();
        //return Promise.resolve(this.authors)
        
    }

    @Query()
    async author(@Root() root,@Args('id') id):Promise<AuthorInterface>{
        return await this.authorService.findOne(id);
    }

    @Mutation()
    async createAuthor(@Root() root,@Args('author') author:CreateAuthorDTO):Promise<AuthorInterface>{
        return await this.authorService.create(author);
    }
    
    @Mutation()
    async deleteAuthor(@Args('id') id):Promise<string>{
        return await this.authorService.delete(id);
    }

    @Mutation()
    async updateAuthor(@Args() args):Promise<AuthorInterface>{
        return await this.authorService.update(args.id,args.author)
    }

    @ResolveProperty()
    posts(@Parent() author){
        const {id}=author;
        //fetch all the post from mongodb post collection by authorId
        return [{_id:'1',title:'learn nodejs'}]
    }
    
    @ResolveProperty()
    address(@Parent() author){
        const {id}=author;
        //fetch the author address on based on auth
        return {_id:'1',zipCode:'384265',phone:'5454546461',city:'patan'}
    }

   /* @Query()
    async author(@Parent() parent,@Args('id') id,@Context() context,@Info() info):Promise<Author>{
        const authorFound=Promise.resolve(this.authors.find(author=>author.id==id))
        return authorFound? Promise.resolve(authorFound):Promise.reject('cound not find Author')
      //  return {id:"1",firstName:"jack",lastName:"denmo"}
        //    if(args.id==="1") return {id:"1",firstName:"jack",lastName:"denmo"}
    //    else{return `${args.id} is not real ID`}
    }*/
    
}
