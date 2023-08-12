import { User } from '@prisma/client';
import { UserOmittedPassword } from '../types';
export declare const getUserWithoutPassword: (user: User) => UserOmittedPassword;
