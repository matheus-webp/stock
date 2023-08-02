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
    if (!user) {
      throw new HttpException(
        'Email ou Senha incorretos ou inválidos',
        HttpStatus.BAD_REQUEST,
      );
    }
    const isPasswordValid = await this.encryptionService.compare(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new HttpException(
        'Email ou Senha incorretos ou inválidos',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.authenticationService.login(email);
  }
}
