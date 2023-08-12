import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { UserService } from 'src/user/user.service';

@Module({ imports: [CoreModule], providers: [UserService] })
export class AuthorizationModule {}
