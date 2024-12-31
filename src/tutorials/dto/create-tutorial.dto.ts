import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateTutorialDto {
    @IsString()
    @IsNotEmpty({ message: 'O Título é obrigatório' })
    @MinLength(3, { message: 'O Título deve ter no mínimo 3 caracteres' })
    @MaxLength(256, { message: 'O Título deve ter no máximo 256 caracteres' })
    title: string;

    @IsString()
    @IsNotEmpty({ message: 'A Descrição é obrigatória' })
    @MinLength(3, { message: 'A Descrição deve ter no mínimo 3 caracteres' })
    @MaxLength(1000, {
        message: 'A Descrição deve ter no máximo 1000 caracteres',
    })
    description: string;
}
