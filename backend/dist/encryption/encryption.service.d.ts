export declare class EncryptionService {
    private salt;
    hash(value: string): Promise<string>;
    compare(value: string, hashedValue: string): Promise<boolean>;
}
