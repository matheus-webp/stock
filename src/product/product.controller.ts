import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { DeleteProductDto } from './dto/delete';
import { NotFoundError, UnauthorizedError } from 'src/errors';

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

  @UseGuards(AuthorizationGuard)
  @Post('delete')
  async delete(@Req() req, @Body() data: DeleteProductDto) {
    const { user } = req;
    const { productId } = data;
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.delete({ id: product.id });
  }
}
