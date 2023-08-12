"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const common_1 = require("@nestjs/common");
class NotFoundError {
    constructor(param) {
        throw new common_1.HttpException(`${param} não encontrado(a)`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not-found.js.map