import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncryptionService } from 'src/encryption/encryption.service';
import { getUserWithoutPassword } from './helpers';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly encryptionService: EncryptionService,
  ) {}

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({ where });
  }

  async create(data: Prisma.UserCreateInput) {
    const hashedPassword = await this.encryptionService.hash(data.password);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
    return getUserWithoutPassword(user);
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.delete({ where });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    return await this.prisma.user.update({ where, data });
  }
}
