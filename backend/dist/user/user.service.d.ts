import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncryptionService } from 'src/encryption/encryption.service';
export declare class UserService {
    private readonly prisma;
    private readonly encryptionService;
    constructor(prisma: PrismaService, encryptionService: EncryptionService);
    findOne(where: Prisma.UserWhereUniqueInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown, never> & {}>;
    create(data: Prisma.UserCreateInput): Promise<import("./types").UserOmittedPassword>;
    delete(where: Prisma.UserWhereUniqueInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown, never> & {}>;
    update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown, never> & {}>;
}
