import { Controller,Get, Post, Put ,Delete, HttpCode, Header, Redirect, Query, Param,Body, HttpException, HttpStatus, ForbiddenException, NotFoundException, UseFilters, UseInterceptors} from '@nestjs/common';
//import { get, request } from 'http';
import {query, Request,Response} from 'express'
import { promises } from 'fs';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import {HttpExceptionFilter} from '../common/filters/http-exception.filter'
import {TransformInterceptor} from '../common/intercepters/transform.interceptor'
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateProductDTO } from './dto/Update-product.dto';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)

export class ProductsController {

    constructor(private productservice: ProductsService){}

    @Post()
    async create(@Body() product:CreateProductDTO):Promise<Product>{
        return await this.productservice.create(product);
       // return 'NEW PRODUCT ENDPOINT';
    }

    @Get()
    async find(): Promise<Product[]>{
        return await this.productservice.findAll();
    }

  
    @Get(':id')
    async findOne(@Param('id') id): Promise<Product>{
        return await this.productservice.findOne(+id);
    }

    @Delete(':productId/:detailsId')
    async delete(@Param() params): Promise<DeleteResult>{
        return await this.productservice.delete(
            +params.productId,
            +params.detailsId
            );
    }

   

    // @Delete(':id')
    // async delete(@Param('id') id): Promise<DeleteResult>{
    //     return await this.productservice.delete(+id);
    // }

    @Put(':id')
    async update(@Param('id') id,@Body() recordToUpdate:UpdateProductDTO): Promise<Product>{
        return await this.productservice.update(+id,recordToUpdate)
    }
    // Put(':id')
    // async update(@Param('id') id,@Body() recordToUpdate:UpdateProductDTO): Promise<UpdateProductDTO>{
    //     return await this.productservice.update(+id,recordToUpdate)
    // }
    
   
    // @Get('ab*cd')
    // pattern():string{
    //     return 'PATTERN MATCHED';
    // }

    // @Get(':id')
    // async findOne(@Param() params): Promise<Product>{
    //     return this.productservice.findOne(params.id);
    // }

     // @Put()
    // update():string{
    //     return 'UPDATED PRODUCT'
    // }

    // @Delete(':id')
    // async delete(@Param() params): Promise<Product[]>{
    //     //return this.productservice.delete(params.id);
    //     // throw new HttpException('something went wrong',HttpStatus.BAD_REQUEST)
    //     // throw new ForbiddenException();
    //    // throw new NotFoundException();
    // }
    
}


// @Req()
// request:Request,
// @Res()
// response:Response,
// @Query() query,
