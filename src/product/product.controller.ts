import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.create.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Post()
  // async create(@Body() data: CreateProductDto) {
  //   await this.productService.create(data)
  // }
}
