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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const dto_1 = require("./dto");
const authorization_guard_1 = require("../authorization/authorization.guard");
const encryption_service_1 = require("../encryption/encryption.service");
const invalid_password_1 = require("../errors/invalid-password");
const product_service_1 = require("../product/product.service");
let UserController = class UserController {
    constructor(userService, encryptionSerivce, productService) {
        this.userService = userService;
        this.encryptionSerivce = encryptionSerivce;
        this.productService = productService;
    }
    async signup({ name, email, password, passwordConfirmation }) {
        if (passwordConfirmation !== password) {
            return new common_1.HttpException('Senhas não conferem', common_1.HttpStatus.BAD_REQUEST);
        }
        const userAlreadyExists = await this.userService.findOne({ email });
        if (userAlreadyExists) {
            return new common_1.HttpException('Usuário com esse email já existe', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.userService.create({ name, email, password });
    }
    async update({ user }, updateUserDto) {
        await this.userService.update(user.id, updateUserDto);
    }
    async delete({ user }, { password }) {
        const userToDelete = await this.userService.findOne({ email: user.email });
        const isPasswordCorrect = await this.encryptionSerivce.compare(password, userToDelete.password);
        if (!isPasswordCorrect)
            new invalid_password_1.InvalidPassword();
        const deleteUserProducts = await this.productService.deleteMany({
            userId: user.id,
        });
        const deleteUser = await this.userService.delete({ email: user.email });
        return { deleteUserProducts, deleteUser };
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.DeleteUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        encryption_service_1.EncryptionService,
        product_service_1.ProductService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map