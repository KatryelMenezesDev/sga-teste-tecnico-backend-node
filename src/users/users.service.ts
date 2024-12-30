import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.usersRepository.create(createUserDto);
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
