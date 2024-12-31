// ARQUIVO DE METODOS PARA MANIPULAR OS DADOS DO USUARIO NO BANCO DE DADOS

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateTutorialDto } from '../dto/create-tutorial.dto';
// import { UpdateTutorialDto } from '../dto/update-tutorial.dto';
// import { Tutorial } from '../entities/tutorial.entity';

@Injectable()
export class TutorialsRepository {
    constructor(private readonly prisma: PrismaService) {}
}
