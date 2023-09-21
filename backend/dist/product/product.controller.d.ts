import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create';
import { UpdateProductDto } from './dto/update';
import { ChangeProductQuantity } from './dto/change-quantity';
type categoryDTO = {
    categoryId: string;
};
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    list({ user }: {
        user: any;
    }): Promise<{
        allProducts: (import("@prisma/client/runtime/library").GetResult<{
            id: string;
            name: string;
            description: string;
            price: number;
            quantity: number;
            userId: string;
            categoryId: string;
        }, unknown, never> & {})[];
        totalValue: number;
    }>;
    listAllByCategory({ user }: {
        user: any;
    }, { categoryId }: categoryDTO): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {})[]>;
    create({ user }: {
        user: any;
    }, data: CreateProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    delete(productId: string, { user }: {
        user: any;
    }): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    update(productId: string, { user }: {
        user: any;
    }, data: UpdateProductDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
    change(productId: string, { user }: {
        user: any;
    }, { quantity }: ChangeProductQuantity): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: string;
        name: string;
        description: string;
        price: number;
        quantity: number;
        userId: string;
        categoryId: string;
    }, unknown, never> & {}>;
}
export {};
