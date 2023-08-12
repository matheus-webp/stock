import * as jwt from 'jsonwebtoken';
export declare class JwtService {
    sign(payload: object): string;
    verify(token: string): string | jwt.JwtPayload;
}
