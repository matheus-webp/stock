import { Module } from '@nestjs/common';
import { EncryptionService } from 'src/encryption/encryption.service';
import { JwtService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [EncryptionService, PrismaService, JwtService],
  providers: [EncryptionService, PrismaService, JwtService],
})
export class CoreModule {}
