import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T>{
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T,Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    // console.log('context',context);
    // console.log('next',next);
    // console.log(context.getClass());
    // console.log(context.getHandler());
    
    
    //console.log(next.handle());
    
    //console.log('before.....');
    
    return next.handle().pipe(map(data=>({data})));
  }
}
