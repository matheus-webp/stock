import { User } from '@prisma/client';
export type UserOmittedPassword = Omit<User, 'password'>;
