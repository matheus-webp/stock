import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { AuthorizationController } from './authorization.controller';
import { CoreModule } from 'src/core/core.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [CoreModule],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, UserService],
})
export class AuthorizationModule {}
