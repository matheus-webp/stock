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

type categoryDTO = {
  categoryId: string;
};

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthorizationGuard)
  @Get()
  async list(@Req() { user }) {
    const allProducts = await this.productService.listAll({ userId: user.id });
    const totalValue = this.productService.sumAllPrices(allProducts);
    return { allProducts, totalValue };
  }

  @UseGuards(AuthorizationGuard)
  @Get('listAll')
  async listAllByCategory(
    @Req() { user },
    @Query() { categoryId }: categoryDTO,
  ) {
    return await this.productService.listAll({
      userId: user.id,
      AND: { categoryId },
    });
  }

  @UseGuards(AuthorizationGuard)
  @Post()
  async create(@Req() { user }, @Body() data: CreateProductDto) {
    const { categoryId, ...productData } = data;
    return await this.productService.create({
      ...productData,
      user: { connect: { id: user.id } },
      category: { connect: { id: categoryId } },
    });
  }

  @UseGuards(AuthorizationGuard)
  @Post('delete')
  async delete(@Query('productId') productId: string, @Req() { user }) {
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.delete({ id: product.id });
  }

  @UseGuards(AuthorizationGuard)
  @Put('update')
  async update(
    @Query('productId') productId: string,
    @Req() { user },
    @Body() data: UpdateProductDto,
  ) {
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.update({ id: product.id }, { ...data });
  }

  @UseGuards(AuthorizationGuard)
  @Patch()
  async change(
    @Query('productId') productId: string,
    @Req() { user },
    @Body() { quantity }: ChangeProductQuantity,
  ) {
    const product = await this.productService.findOne({ id: productId });
    if (!product) new NotFoundError('product');
    if (user.id !== product.userId) new UnauthorizedError();
    return await this.productService.update(
      { id: product.id },
      { quantity: { set: quantity } },
    );
  }
}
