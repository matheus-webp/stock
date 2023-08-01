import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto, UpdateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signup(@Body() signUpDto: SignUpDto) {
    const { email, password, passwordConfirmation } = signUpDto;
    if (passwordConfirmation !== password) {
      return new HttpException('Senhas não conferem', HttpStatus.BAD_REQUEST);
    }
    const userAlreadyExists = await this.userService.findOne({ email });
    if (userAlreadyExists) {
      return new HttpException(
        'Usuário com esse email já existe',
        HttpStatus.BAD_REQUEST,
      );
    }
    const { passwordConfirmation: _, ...user } = signUpDto;
    return await this.userService.create(user);
  }

  async update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    const { user } = req;
    await this.userService.update(user.id, updateUserDto);
  }
}
