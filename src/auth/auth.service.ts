import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(id: string): Promise<any> {
        const user = await this.usersService.findOne(id);

        if (user) {
            return user;
        }
    }

    async auth(user: any) {
        const payload = { id: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
