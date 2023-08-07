import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  name?: string;

  description?: string;

  price?: number;

  quantity?: number;
}
