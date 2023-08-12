import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { DeleteUserDto, SignUpDto, UpdateUserDto } from './dto';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { EncryptionService } from 'src/encryption/encryption.service';
import { InvalidPassword } from 'src/errors/invalid-password';
import { ProductService } from 'src/product/product.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly encryptionSerivce: EncryptionService,
    private readonly productService: ProductService,
  ) {}

  @Post('signup')
  async signup(
    @Body() { name, email, password, passwordConfirmation }: SignUpDto,
  ) {
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
    return await this.userService.create({ name, email, password });
  }

  @Patch()
  @UseGuards(AuthorizationGuard)
  async update(@Request() { user }, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.update(user.id, updateUserDto);
  }

  @Post()
  @UseGuards(AuthorizationGuard)
  async delete(@Request() { user }, @Body() { password }: DeleteUserDto) {
    const userToDelete = await this.userService.findOne({ email: user.email });
    const isPasswordCorrect = await this.encryptionSerivce.compare(
      password,
      userToDelete.password,
    );
    if (!isPasswordCorrect) new InvalidPassword();
    const deleteUserProducts = await this.productService.deleteMany({
      userId: user.id,
    });
    const deleteUser = await this.userService.delete({ email: user.email });
    return { deleteUserProducts, deleteUser };
  }
}
