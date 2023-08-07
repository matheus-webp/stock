import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedError {
  constructor() {
    throw new HttpException('Usuário não autorizado', HttpStatus.UNAUTHORIZED);
  }
}
