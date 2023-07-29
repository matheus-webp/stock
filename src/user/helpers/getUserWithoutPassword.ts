import { User } from '@prisma/client';
import { UserOmittedPassword } from '../types';

export const getUserWithoutPassword = (user: User): UserOmittedPassword => {
  if (!user) return user;
  const { password, ...UserWithoutPassword } = user;
  return UserWithoutPassword;
};
