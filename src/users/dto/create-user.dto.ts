import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    IsEmail,
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        name: 'name',
        description: 'Nome do usuário',
        type: 'string',
        required: true,
        example: 'João da Silva',
    })
    @IsNotEmpty({ message: 'O Nome é obrigatório' })
    @MinLength(3, { message: 'O Nome deve ter no mínimo 3 caracteres' })
    @MaxLength(256, { message: 'O Nome deve ter no máximo 256 caracteres' })
    name: string;

    @ApiProperty({
        name: 'email',
        description: 'Email do usuário',
        type: 'string',
        required: true,
        example: 'email@test.com',
    })
    @IsString()
    @IsEmail({}, { message: 'O Email é inválido' })
    @IsNotEmpty({ message: 'O Email é obrigatório' })
    @MinLength(5, { message: 'O Email deve ter no mínimo 5 caracteres' })
    @MaxLength(256, { message: 'O Email deve ter no máximo 256 caracteres' })
    email: string;

    @ApiProperty({
        name: 'password',
        description: 'Senha do usuário',
        type: 'string',
        required: true,
        example: '12345678',
    })
    @IsString()
    @IsNotEmpty({ message: 'A Senha é obrigatória' })
    @MinLength(8, { message: 'A Senha deve ter no mínimo 8 caracteres' })
    @MaxLength(256, { message: 'A Senha deve ter no máximo 256 caracteres' })
    password: string;
}
