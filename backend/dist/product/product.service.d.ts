import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(where: Prisma.ProductWhereUniqueInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    listAll(where: Prisma.ProductWhereInput): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {})[]>;
    create(data: Prisma.ProductCreateInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    delete(where: Prisma.ProductWhereUniqueInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    update(where: Prisma.ProductWhereUniqueInput, data: Prisma.ProductUpdateInput): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    deleteMany(where: Prisma.ProductWhereInput): Promise<Prisma.BatchPayload>;
    sumAllPrices(arr: {
        price: number;
    }[]): number;
}
