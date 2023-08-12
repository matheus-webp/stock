import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CoreModule } from 'src/core/core.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [CoreModule],
  controllers: [ProductController],
  providers: [ProductService, UserService],
})
export class ProductModule {}
