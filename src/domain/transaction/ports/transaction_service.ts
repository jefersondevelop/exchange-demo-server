import { Transaction } from "../models/transaction";

export interface TransactionService {

    save(transaction: Transaction): Promise<Transaction | undefined>;

    getAll(): Promise<Transaction[] | undefined>;

    findByUser(id?: string): Promise<Transaction[] | undefined>;

}