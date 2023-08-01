import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {
  private salt = 10;
  async hash(value: string) {
    return await bcrypt.hash(value, this.salt);
  }

  async compare(value: string, hashedValue: string) {
    return await bcrypt.compare(value, hashedValue);
  }
}
