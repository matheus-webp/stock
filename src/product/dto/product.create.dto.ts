import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

@Injectable()
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
