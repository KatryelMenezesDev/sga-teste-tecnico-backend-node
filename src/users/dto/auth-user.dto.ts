import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    IsEmail,
} from 'class-validator';

export class AuthUserDto {
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
