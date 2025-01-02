import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../models/jwt-payload.model';
import { UserEntity } from 'src/users/entities/user.entity';
import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: authService.returnJwtExtractor(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(jwtPayload: JwtPayload): Promise<UserEntity> {
        const user = await this.authService.validateUser(jwtPayload);
        if (!user) {
            throw new UnauthorizedError('Usuário não encontrado');
        }

        return user;
    }
}
