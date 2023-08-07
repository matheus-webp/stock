import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundError {
  constructor(param: string) {
    throw new HttpException(`${param} not found`, HttpStatus.NOT_FOUND);
  }
}
