import { Type } from "@google/genai";

export const transactionSchema = {
    type: Type.OBJECT,
    properties: {
        date: {
            type: Type.STRING,
            description:
                "Transaction date (DD-MM-YYYY). Use today's date if unavailable.",
        },
        amount: {
            type: Type.NUMBER,
        },
        currency: {
            type: Type.STRING,
        },
        merchant: {
            type: Type.STRING,
        },
        category: {
            type: Type.STRING,
        },
        status: {
            type: Type.STRING,
        },
        description: {
            type: Type.STRING,
        },
    },
    required: [
        "date",
        "amount",
        "currency",
        "merchant",
        "category",
        "status",
    ],
};