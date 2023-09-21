import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async newCategory(data: Prisma.CategoryCreateInput) {
    return await this.prisma.category.create({ data });
  }

  async findOne(where: Prisma.CategoryWhereUniqueInput) {
    return await this.prisma.category.findUnique({ where });
  }

  async delete(where: Prisma.CategoryWhereUniqueInput) {
    return await this.prisma.category.delete({ where });
  }

  async change(
    where: Prisma.CategoryWhereUniqueInput,
    data: Prisma.CategoryUpdateInput,
  ) {
    return await this.prisma.category.update({ where, data });
  }
}
