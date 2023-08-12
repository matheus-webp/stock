import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPassword {
  constructor() {
    throw new HttpException('Senha inválida', HttpStatus.BAD_REQUEST);
  }
}
