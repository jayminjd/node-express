import { Controller,Get, Post, Put ,Delete, HttpCode, Header, Redirect, Query, Param} from '@nestjs/common';
//import { get, request } from 'http';
import {query, Request,Response} from 'express'

@Controller('products')
export class ProductsController {
    @Post()
    @HttpCode(204)
    @Header('Authorization','Bearer XADSADASD##$')
    create():string{
        return 'NEW PRODUCT ENDPOINT';
    }
    
    @Put()
    update():string{
        return 'UPDATED PRODUCT'
    }

    @Delete()
    delete():string{
        return 'DELETE ENDPOINT'
    }

    @Get()
    findAll():string{
        return 'FIND ALL';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com',302)
    getDocs(@Query('version') version){
        if(version && version ==='5'){
            return {url: 'https://docs.nestjs.com/v5/'}
        }
    }
    

    @Get('ab*cd')
    pattern():string{
        return 'PATTERN MATCHED';
    }

    @Get(':id')
    findOne(@Param() params):string{
        return params;
    }

    
}


// @Req()
// request:Request,
// @Res()
// response:Response,
// @Query() query,
