import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CoreModule } from 'src/core/core.module';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [CoreModule],
  controllers: [UserController],
  providers: [UserService, ProductService],
})
export class UserModule {}
