import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'Confirmação de senha não pode ser vazia' })
  @MinLength(6, {
    message: 'Confirmação de senha deve ter no mínimo 6 caracteres',
  })
  passwordConfirmation: string;
}
