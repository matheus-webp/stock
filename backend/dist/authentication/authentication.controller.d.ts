import { AuthenticationService } from './authentication.service';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto';
import { EncryptionService } from 'src/encryption/encryption.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    private readonly userService;
    private readonly encryptionService;
    constructor(authenticationService: AuthenticationService, userService: UserService, encryptionService: EncryptionService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
