import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { UserService } from 'src/user/user.service';

type TokenPayload = {
  email: string;
};

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer') {
      throw new HttpException(
        'Token inválido ou inexistente',
        HttpStatus.UNAUTHORIZED,
      );
    }
    try {
      const { email } = this.jwtService.verify(token) as TokenPayload;
      const user = await this.userService.findOne({ email });
      if (!user) throw new Error();
      request.user = user;
    } catch (error) {
      throw new HttpException(
        'Token inválido ou inexistente',
        HttpStatus.UNAUTHORIZED,
      );
    }

    return true;
  }
}
