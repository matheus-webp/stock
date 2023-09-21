import { IsNotEmpty } from 'class-validator';

export class DeleteCategoryDto {
  @IsNotEmpty()
  categoryId: string;
}
