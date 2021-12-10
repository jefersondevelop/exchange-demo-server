import { Account } from "../models/account";

export interface AccountService {
    save(account: Account | undefined): Promise<Account | undefined>;
    findByAccountNumberWithUser(accountNumber: string | undefined, userId: string | undefined): Promise<Account | undefined>;
    existsByAccountNumber(accountNumber: string | undefined): Promise<Boolean | undefined>;
}