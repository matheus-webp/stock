import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [UserModule, ProductModule, AuthorizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
