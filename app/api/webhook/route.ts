import { ZodError } from "zod";
import { ApiResponse } from "@/utils/apiResponse";

import {
    ProcessTransactionPayload,
    TransactionService,
} from "@/services/transaction.service";

const transactionService = new TransactionService();

export async function POST(request: Request) {
    try {
        /**
         * -------------------------------
         * Authentication
         * -------------------------------
         */
        const secret = request.headers.get("x-webhook-secret");

        if (secret !== process.env.WEBHOOK_SECRET) {
            return ApiResponse.error(
                "Unauthorized",
                401
            );
        }

        /**
         * -------------------------------
         * Read Multipart Form
         * -------------------------------
         */
        const formData = await request.formData();
        const text = formData.get("text") as string | null;
        const file = formData.get("file") as File | null;

        /**
         * -------------------------------
         * Validate Request
         * -------------------------------
         */
        if (!text && !file) {
            return ApiResponse.error(
                "Text or image is required.",
                400
            );
        }

        /**
         * -------------------------------
         * Process Transaction
         * -------------------------------
         */
        const payload: ProcessTransactionPayload = {
            text: text ?? undefined,
            file: file ?? undefined,
        };

        const transaction =
            await transactionService.process(
                payload
            );

        /**
         * -------------------------------
         * Success Response
         * -------------------------------
         */
        return ApiResponse.success(
            transaction,
            "Transaction processed successfully."
        );
    } catch (error) {
        console.error(error);

        if (error instanceof ZodError) {
            return ApiResponse.validation(
                error
            );
        }

        if (error instanceof Error) {
            return ApiResponse.error(
                error.message
            );
        }

        return ApiResponse.error();
    }
}