// ARQUIVO DE METODOS PARA MANIPULAR OS DADOS DO USUARIO NO BANCO DE DADOS

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTutorialDto } from '../dto/create-tutorial.dto';
import { UpdateTutorialDto } from '../dto/update-tutorial.dto';
import { Tutorial } from '../entities/tutorial.entity';

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateTutorialDto): Promise<Tutorial> {
        const userAlreadyExists = await this.prisma.user.findFirst({
            where: {
                email: createUserDto.email,
            },
        });

        if (userAlreadyExists) {
            return null;
        }

        return await this.prisma.user.create({
            data: {
                ...createUserDto,
            },
        });
    }

    async findAll(): Promise<Tutorial[]> {
        return await this.prisma.user.findMany({
            where: {
                delete_att: null,
            },
        });
    }

    async findOne(id: string): Promise<Tutorial> {
        return await this.prisma.user.findUnique({
            where: {
                id,
                delete_att: null,
            },
        });
    }

    async update(id: string, updateUserDto: UpdateTutorialDto): Promise<Tutorial> {
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
