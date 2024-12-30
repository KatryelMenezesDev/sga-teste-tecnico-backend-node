import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { UserEntity } from './entities/user.entity';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

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

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    remove(id: string) {
        return this.usersRepository.remove(id);
    }
}
