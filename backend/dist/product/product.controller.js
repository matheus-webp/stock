"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_1 = require("./dto/create");
const authorization_guard_1 = require("../authorization/authorization.guard");
const errors_1 = require("../errors");
const update_1 = require("./dto/update");
const change_quantity_1 = require("./dto/change-quantity");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async list({ user }) {
        const allProducts = await this.productService.listAll({ userId: user.id });
        const totalValue = this.productService.sumAllPrices(allProducts);
        return { allProducts, totalValue };
    }
    async create({ user }, data) {
        return await this.productService.create(Object.assign(Object.assign({}, data), { user: { connect: { id: user.id } } }));
    }
    async delete(productId, { user }) {
        const product = await this.productService.findOne({ id: productId });
        if (!product)
            new errors_1.NotFoundError('product');
        if (user.id !== product.userId)
            new errors_1.UnauthorizedError();
        return await this.productService.delete({ id: product.id });
    }
    async update(productId, { user }, data) {
        const product = await this.productService.findOne({ id: productId });
        if (!product)
            new errors_1.NotFoundError('product');
        if (user.id !== product.userId)
            new errors_1.UnauthorizedError();
        return await this.productService.update({ id: product.id }, Object.assign({}, data));
    }
    async change(productId, { user }, { quantity }) {
        const product = await this.productService.findOne({ id: productId });
        if (!product)
            new errors_1.NotFoundError('product');
        if (user.id !== product.userId)
            new errors_1.UnauthorizedError();
        return await this.productService.update({ id: product.id }, { quantity: { set: quantity } });
    }
};
__decorate([
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "list", null);
__decorate([
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Query)('productId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Query)('productId')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Query)('productId')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, change_quantity_1.ChangeProductQuantity]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "change", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map