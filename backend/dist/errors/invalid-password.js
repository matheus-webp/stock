"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPassword = void 0;
const common_1 = require("@nestjs/common");
class InvalidPassword {
    constructor() {
        throw new common_1.HttpException('Senha inválida', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidPassword = InvalidPassword;
//# sourceMappingURL=invalid-password.js.map