import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'O Nome é obrigatório' })
    @MinLength(3, { message: 'O Nome deve ter no mínimo 3 caracteres' })
    @MaxLength(256, { message: 'O Nome deve ter no máximo 256 caracteres' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'O Login é obrigatório' })
    @MinLength(5, { message: 'O Login deve ter no mínimo 5 caracteres' })
    @MaxLength(256, { message: 'O Login deve ter no máximo 256 caracteres' })
    login: string;

    @IsString()
    @IsNotEmpty({ message: 'A Senha é obrigatória' })
    @MinLength(8, { message: 'A Senha deve ter no mínimo 8 caracteres' })
    @MaxLength(256, { message: 'A Senha deve ter no máximo 256 caracteres' })
    password: string;

    creat_att: Date;
}
