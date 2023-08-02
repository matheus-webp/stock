import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.ProductWhereUniqueInput) {
    return await this.prisma.product.findUnique({ where });
  }

  async create(data: Prisma.ProductCreateInput) {
    return await this.prisma.product.create({
      data,
    });
  }

  async delete(where: Prisma.ProductWhereUniqueInput) {
    return await this.prisma.product.delete({ where });
  }

  async update(
    where: Prisma.ProductWhereUniqueInput,
    data: Prisma.ProductUpdateInput,
  ) {
    return await this.prisma.product.update({ where, data });
  }
}
