import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserEntity } from 'src/users/entities/user.entity';
import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';
import { Request } from 'express';
import { JwtPayload } from './models/jwt-payload.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    public async createAccessToken(userId: string): Promise<string> {
        return sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
    }

    public async validateUser(jwtPayload: JwtPayload): Promise<UserEntity> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: jwtPayload.userId,
                delete_att: null,
            },
        });

        if (!user) {
            throw new UnauthorizedError('Usuário não encontrado');
        }

        return user;
    }

    private jwtExtractor(request: Request): string {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new BadRequestError('Token não informado');
        }

        const [, token] = authHeader.split(' ');

        return token;
    }

    public returnJwtExtractor(): (request: Request) => string {
        return this.jwtExtractor;
    }
}
