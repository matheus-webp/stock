import { HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { DeleteUserDto, SignUpDto, UpdateUserDto } from './dto';
import { EncryptionService } from 'src/encryption/encryption.service';
import { ProductService } from 'src/product/product.service';
export declare class UserController {
    private readonly userService;
    private readonly encryptionSerivce;
    private readonly productService;
    constructor(userService: UserService, encryptionSerivce: EncryptionService, productService: ProductService);
    signup({ name, email, password, passwordConfirmation }: SignUpDto): Promise<HttpException | import("./types").UserOmittedPassword>;
    update({ user }: {
        user: any;
    }, updateUserDto: UpdateUserDto): Promise<void>;
    delete({ user }: {
        user: any;
    }, { password }: DeleteUserDto): Promise<{
        deleteUserProducts: import(".prisma/client").Prisma.BatchPayload;
        deleteUser: import("@prisma/client/runtime/library").GetResult<{
            id: string;
            name: string;
            email: string;
            password: string;
        }, unknown, never> & {};
    }>;
}
