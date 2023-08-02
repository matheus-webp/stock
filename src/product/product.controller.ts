import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthorizationGuard)
  @Post()
  async create(@Req() req, @Body() data: CreateProductDto) {
    const { user } = req;
    return await this.productService.create({
      ...data,
      user: { connect: { id: user.id } },
    });
  }
}
