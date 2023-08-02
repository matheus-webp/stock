import { Injectable } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string) {
    const access_token = this.jwtService.sign({ email });
    return { access_token };
  }
}
