import { IsNotEmpty } from 'class-validator';

export class CategoryUniqueIdDto {
  @IsNotEmpty()
  categoryId: string;
}
