import { transactionSchema } from "@/schema/transaction.schema";
import { z } from "zod";

export type TransactionType = 'expense' | 'income';

export type ExpenseCategory =
    | 'electricity'
    | 'internet'
    | 'food'
    | 'transportation'
    | 'entertainment'
    | 'shopping'
    | 'fun'
    | 'others';

export type IncomeCategory =
    | 'salary'
    | 'investment'
    | 'others';

export type TransactionCategory = ExpenseCategory | IncomeCategory;
export interface TransactionBase {
    id: number;
    walletId: number;
    title: string;
    amount: number;
    transactionDate: string;
    remarks?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ExpenseTransaction extends TransactionBase {
    transactionType: 'expense';
    transactionCategory: ExpenseCategory;
}

export interface IncomeTransaction extends TransactionBase {
    transactionType: 'income';
    transactionCategory: IncomeCategory;
}

export type DetailedTransaction =
    | ExpenseTransaction
    | IncomeTransaction;


export type TransactionSchema = z.infer<typeof transactionSchema>;