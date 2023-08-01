import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Post()
  // async create(@Req() req, @Body() data: CreateProductDto) {
  //   await this.productService.create({...data, req.user})
  // }
}
