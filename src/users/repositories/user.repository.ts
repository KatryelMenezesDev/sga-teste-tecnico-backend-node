// ARQUIVO DE METODOS PARA MANIPULAR OS DADOS DO USUARIO NO BANCO DE DADOS

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt'; // Corrigido para importar corretamente o bcrypt

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const userAlreadyExists = await this.prisma.user.findFirst({
            where: {
                email: createUserDto.email,
                delete_att: null,
            },
        });

        if (userAlreadyExists) {
            return null;
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        return await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
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
        if (updateUserDto.password) {
            updateUserDto.password = await bcrypt.hash(
                updateUserDto.password,
                10,
            );
        }

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

    async remove(id: string): Promise<{ message: string }> {
        await this.prisma.user.update({
            where: {
                id,
                delete_att: null,
            },
            data: {
                delete_att: new Date(),
            },
        });
        return { message: 'Usuário removido com sucesso' };
    }
}
