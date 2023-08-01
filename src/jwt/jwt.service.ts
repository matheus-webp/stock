import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  sign(payload: string) {
    return jwt.sign(payload, process.env.JWT_SECRET);
  }

  verify(token: string) {
    jwt.verify(token, process.env.JWT_SECRET);
  }
}
