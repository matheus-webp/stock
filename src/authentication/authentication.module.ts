import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { CoreModule } from 'src/core/core.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [CoreModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserService],
})
export class AuthenticationModule {}
