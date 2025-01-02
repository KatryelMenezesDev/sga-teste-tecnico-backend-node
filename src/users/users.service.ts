import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';
import { UsersRepository } from './repositories/user.repository';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { UserEntity } from './entities/user.entity';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly AuthService: AuthService,
    ) {}

    async auth(
        authUserDto: AuthUserDto,
    ): Promise<{ name: string; jwtToken: string; email: string }> {
        const user = await this.usersRepository.findUserByEmail(
            authUserDto.email,
        );

        if (user) {
            const passwordMatch = await this.usersRepository.checkPassword(
                authUserDto.password,
                user,
            );

            if (passwordMatch) {
                const jwtToken = await this.AuthService.createAccessToken(
                    user.id,
                );
                return { name: user.name, jwtToken, email: user.email };
            } else {
                throw new BadRequestError('Senha inválida');
            }
        } else {
            throw new NotFoundError('Usuário não encontrado');
        }
    }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = await this.usersRepository.create(createUserDto);
        if (!user) {
            throw new BadRequestError('Usuário já existe');
        }
        return user;
    }

    async findAll(): Promise<UserEntity[]> {
        const users: UserEntity[] = await this.usersRepository.findAll();
        if (!users.length) {
            throw new NotFoundError('Usuários não encontrados');
        }

        return users;
    }

    async findOne(id: string): Promise<UserEntity> {
        const user: UserEntity = await this.usersRepository.findOne(id);
        if (!user) {
            throw new NotFoundError('Usuário não encontrado');
        }

        return user;
    }

    async update(
        id: string,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return await this.usersRepository.update(id, updateUserDto);
    }

    async remove(id: string): Promise<{ message: string }> {
        return await this.usersRepository.remove(id);
    }
}
