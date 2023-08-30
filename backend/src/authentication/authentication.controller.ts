import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto';
import { EncryptionService } from 'src/encryption/encryption.service';
import { UnauthorizedError } from 'src/errors';

@Controller('login')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userService: UserService,
    private readonly encryptionService: EncryptionService,
  ) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOne({ email });
    if (!user) new UnauthorizedError();

    const isPasswordValid = await this.encryptionService.compare(
      password,
      user.password,
    );
    if (!isPasswordValid) new UnauthorizedError();
    return await this.authenticationService.login(email);
  }
}
