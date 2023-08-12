import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [UserModule, ProductModule, AuthenticationModule, AuthorizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
