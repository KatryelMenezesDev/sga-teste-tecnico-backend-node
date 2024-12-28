// ARQUIVO DE METODOS PARA MANIPULAR OS DADOS DO USUARIO NO BANCO DE DADOS

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return await this.prisma.user.create({
            data: {
                ...createUserDto,
            },
        });
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.prisma.user.findMany({
            where: {
                delete_att: null,
            },
        });
    }

    async findOne(id: string): Promise<UserEntity> {
        return await this.prisma.user.findUnique({
            where: {
                id,
                delete_att: null,
            },
        });
    }

    async update(
        id: string,
        updateUserDto: UpdateUserDto,
    ): Promise<UserEntity> {
        return await this.prisma.user.update({
            where: {
                id,
                delete_att: null,
            },
            data: {
                ...updateUserDto,
                update_att: new Date(),
            },
        });
    }

    async remove(id: string): Promise<string> {
        await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                delete_att: new Date(),
            },
        });

        return `Usuário do id :${id} deletado com sucesso!`;
    }
}
