import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, ProductModule, AuthenticationModule, AuthorizationModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
