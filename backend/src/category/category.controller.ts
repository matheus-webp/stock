import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { NewCategoryDto } from './dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async newCategory(@Body() { name, description }: NewCategoryDto) {
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
  async deleteCategory(@Body() { categoryId }: DeleteCategoryDto) {
    return await this.categoryService.delete({ id: categoryId });
  }
}
