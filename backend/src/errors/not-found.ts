import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundError {
  constructor(param: string) {
    throw new HttpException(`${param} não encontrado(a)`, HttpStatus.NOT_FOUND);
  }
}
