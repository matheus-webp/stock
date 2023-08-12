"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const common_1 = require("@nestjs/common");
class UnauthorizedError {
    constructor() {
        throw new common_1.HttpException('Usuário não autorizado', common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthorized.js.map