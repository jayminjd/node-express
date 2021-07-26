import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from 'src/users/constants/jwt.constants';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
    constructor(
        private userservice:UsersService,
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:jwtConstants.secret,
        })
    }

    async validate(payload:any){
        //find the user based on id from payload.
        const isValidated=await this.userservice.validateUserById(payload.id)
        if(isValidated){
            return {userId:payload.id,email:payload.email}
        }
       else{
           throw new UnauthorizedException('Unauthorized')
       }
    }
}
