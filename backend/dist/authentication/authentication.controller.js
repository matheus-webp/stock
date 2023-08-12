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
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./authentication.service");
const user_service_1 = require("../user/user.service");
const dto_1 = require("./dto");
const encryption_service_1 = require("../encryption/encryption.service");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService, userService, encryptionService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.encryptionService = encryptionService;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findOne({ email });
        if (!user) {
            throw new common_1.HttpException('Email ou Senha incorretos ou inválidos', common_1.HttpStatus.BAD_REQUEST);
        }
        const isPasswordValid = await this.encryptionService.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('Email ou Senha incorretos ou inválidos', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.authenticationService.login(email);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "login", null);
AuthenticationController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        user_service_1.UserService,
        encryption_service_1.EncryptionService])
], AuthenticationController);
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map