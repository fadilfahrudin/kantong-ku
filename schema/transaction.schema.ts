import { z } from "zod";

export const transactionSchema = z.object({
    date: z.string().min(1, "Transaction date is required"),

    amount: z.coerce
        .number({
            error: "Amount is required",
        })
        .nonnegative(),

    currency: z
        .string()
        .trim()
        .default("IDR"),

    merchant: z
        .string()
        .trim()
        .min(1, "Merchant is required"),

    category: z
        .string()
        .trim()
        .default("Other"),

    status: z
        .string()
        .trim()
        .default("Success"),

    description: z
        .string()
        .trim()
        .optional()
        .default(""),
});