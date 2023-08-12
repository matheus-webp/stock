import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwt.service';
import { UserService } from 'src/user/user.service';
export declare class AuthorizationGuard implements CanActivate {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
