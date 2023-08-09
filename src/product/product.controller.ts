import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { NotFoundError, UnauthorizedError } from 'src/errors';
import { UpdateProductDto } from './dto/update';
import { ChangeProductQuantity } from './dto/change-quantity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthorizationGuard)
  @Get()
  async list(@Req() req) {
    const { user } = req;
    return await this.productService.listAll({ userId: user.id });
  }

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
  async delete(@Query('productId') productId: string, @Req() req) {
    const { user } = req;
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.delete({ id: product.id });
  }

  @UseGuards(AuthorizationGuard)
  @Put('update')
  async update(
    @Query('productId') productId: string,
    @Req() req,
    @Body() data: UpdateProductDto,
  ) {
    const { user } = req;
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.update({ id: product.id }, { ...data });
  }

  @UseGuards(AuthorizationGuard)
  @Patch()
  async change(
    @Query('productId') productId: string,
    @Req() req,
    @Body() data: ChangeProductQuantity,
  ) {
    const { user } = req;
    const { quantity } = data;
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.update(
      { id: product.id },
      { quantity: { set: quantity } },
    );
  }
}
