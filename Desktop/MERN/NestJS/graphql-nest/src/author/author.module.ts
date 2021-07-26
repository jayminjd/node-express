import { AuthorSchema } from './author.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';


@Module({
  imports:[MongooseModule.forFeature([{name:'Author',schema:AuthorSchema}])],
  providers: [AuthorService, AuthorResolver]
})
export class AuthorModule {}
