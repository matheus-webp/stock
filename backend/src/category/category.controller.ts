import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';
import { CategoryUniqueIdDto } from './dto/categoryId.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async newCategory(@Body() { name, description }: CategoryDto) {
    const categoryAlreadyExists = await this.categoryService.findOne({ name });
    if (categoryAlreadyExists) {
      throw new HttpException(
        'Uma Categoria com esse nome já existe',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.categoryService.newCategory({ name, description });
  }

  @Delete()
  async deleteCategory(@Body() { categoryId }: CategoryUniqueIdDto) {
    return await this.categoryService.delete({ id: categoryId });
  }

  @Put()
  async updateCategory(
    @Body() { name, description }: CategoryDto,
    @Query() { categoryId }: CategoryUniqueIdDto,
  ) {
    return await this.categoryService.change(
      { id: categoryId },
      { name, description },
    );
  }
}
