import { Module } from '@nestjs/common';
import { EncryptionService } from 'src/encryption/encryption.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [EncryptionService, PrismaService],
  providers: [EncryptionService, PrismaService],
})
export class CoreModule {}
