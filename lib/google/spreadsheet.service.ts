import "server-only";
import { sheets } from "./google.client";
import { TransactionSchema } from "@/types/transaction.type";

export class SpreadsheetService {

    private spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    private sheetName = process.env.GOOGLE_SHEET_NAME;

    /**
     * Membuat header apabila spreadsheet masih kosong
     */
    async initialize() {

        const response =
            await sheets.spreadsheets.values.get({
                spreadsheetId: this.spreadsheetId,
                range: `${this.sheetName}!A1:H1`,
            });

        if (response.data.values?.length) {
            return;
        }

        await sheets.spreadsheets.values.update({
            spreadsheetId: this.spreadsheetId,
            range: `${this.sheetName}!A1:H1`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        "Tanggal",
                        "Nominal",
                        "Mata Uang",
                        "Merchant",
                        "Kategori",
                        "Status",
                        "Deskripsi",
                        "Created At",
                    ],
                ],
            },
        });
    }

    /**
     * Tambah transaksi
     */
    async appendTransaction(transaction: TransactionSchema) {

        await this.initialize();

        await sheets.spreadsheets.values.append({
            spreadsheetId: this.spreadsheetId,
            range: `${this.sheetName}!A:H`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        transaction.date,
                        transaction.amount,
                        transaction.currency,
                        transaction.merchant,
                        transaction.category,
                        transaction.status,
                        transaction.description,
                        new Date().toISOString(),
                    ],
                ],
            },
        });
    }
}