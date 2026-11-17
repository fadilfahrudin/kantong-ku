import { TransactionSchema } from "./transaction.type";

export interface WebhookLog {
    id: string;
    timestamp: string;
    type: 'image' | 'text';
    status: 'success' | 'failed';
    payload: string; // Filename or text preview
    parsedResult: TransactionSchema | null;
    error: string | null;
    sheetUpdated: boolean;
}