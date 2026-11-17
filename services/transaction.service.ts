import "server-only";
import { GeminiService } from "@/lib/gemini/gemini.service";
import { SpreadsheetService } from "@/lib/google/spreadsheet.service";
// import { TelegramService } from "@/lib/telegram/telegram.service";

import { transactionSchema } from "@/schema/transaction.schema";
import { TransactionSchema } from "@/types/transaction.type";
// import { Transaction } from "@/types/transaction";

export interface ProcessTransactionPayload {
    text?: string;
    file?: File;
}

export class TransactionService {
    private readonly gemini = new GeminiService();
    private readonly spreadsheet = new SpreadsheetService();
    // private readonly telegram = new TelegramService();

    async process(
        payload: ProcessTransactionPayload
    ): Promise<TransactionSchema> {
        let parsedResult: unknown;

        /**
         * -------------------------------
         * Parse menggunakan Gemini
         * -------------------------------
         */
        if (payload.file) {
            const buffer = Buffer.from(
                await payload.file.arrayBuffer()
            );

            parsedResult = await this.gemini.parseImage(
                buffer,
                payload.file.type
            );
        } else if (payload.text) {
            parsedResult = await this.gemini.parseText(
                payload.text
            );
        } else {
            throw new Error(
                "Transaction payload is empty."
            );
        }

        /**
         * -------------------------------
         * Validasi menggunakan Zod
         * -------------------------------
         */
        const transaction = transactionSchema.parse(
            parsedResult
        );

        /**
         * -------------------------------
         * Simpan ke Spreadsheet
         * -------------------------------
         */
        await this.spreadsheet.appendTransaction(
            transaction
        );

        /**
         * -------------------------------
         * Kirim notif Telegram
         * (Optional)
         * -------------------------------
         */
        // try {
        //     await this.telegram.sendSuccess(
        //         transaction
        //     );
        // } catch (err) {
        //     console.warn(
        //         "Telegram notification failed:",
        //         err
        //     );
        // }

        return transaction;
    }
}