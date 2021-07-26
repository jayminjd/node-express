//import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";

import {ExceptionFilter,HttpException,ArgumentsHost,Catch} from '@nestjs/common'
import { Request,Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException , host: ArgumentsHost) {
        console.log('exception:',exception);
        console.log('host',host);
        
        
        const ctx=host.switchToHttp()
        const request=ctx.getRequest<Request>();
        const response=ctx.getResponse<Response>();
        const status=exception.getStatus();
         return response.status(status).json({
            statusCode:status,
            timestamp:new Date().toISOString(),
            path:request.url

        })
    }

}