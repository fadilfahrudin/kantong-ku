import { gemini } from "./gemini.client";
import { transactionSchema } from "./gemini.schema";

const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
}).format(new Date());

export class GeminiService {
    async parseText(text: string) {
        const response = await gemini.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
Kamu adalah AI yang membaca transaksi.

Hari ini adalah ${today}.

Aturan:

- Kembalikan JSON sesuai schema.
- Jangan membuat field baru.
- Jika tanggal tidak ditemukan pada input, gunakan tanggal hari ini (${today}).
- Format tanggal harus DD-MM-YYYY.
- Currency default IDR.
- Amount berupa number.
- Description singkat.

Input:

${text}
`,
            config: {
                responseMimeType: "application/json",
                responseSchema: transactionSchema,
            },
        });

        return JSON.parse(response.text!);
    }

    async parseImage(
        buffer: Buffer,
        mimeType: string
    ) {
        const response = await gemini.models.generateContent({
            model: "gemini-2.5-flash",
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType,
                            data: buffer.toString("base64"),
                        },
                    },
                    {
                        text: `
Kamu adalah OCR AI Financial Parser.

Analisis screenshot transaksi.

Yang harus dicari:

- nominal transfer
- tanggal
- bank
- merchant
- nama pengirim
- nama penerima
- status transaksi

Aturan parsing tanggal:

- Semua tanggal yang ditemukan pada bukti transaksi Indonesia diasumsikan menggunakan format DD-MM-YYYY atau DD-MM-YY.
- Angka pertama adalah HARI.
- Angka kedua adalah BULAN.
- Angka terakhir adalah TAHUN.
- Jika tahun terdiri dari 2 digit, ubah menjadi 20YY.
- Output HARUS menggunakan format YYYY-MM-DD.
- Jika informasi tanggal kurang lengkap, gunakan tanggal hari ini: ${today}
- Setelah angka terakhir ditemukan ":", abaikan angka sebelumnya.

Contoh:

21-07-26 -> 2026-07-21
05/11/25 -> 2025-11-05
30.12.24 -> 2024-12-30

Contoh tanggal yang tidak lengkap:

-07-26 -> ${today}
07-26 -> ${today}
/11/25 -> ${today}
11/25 -> ${today}
.11.25 -> ${today}
11.25 -> ${today}

Jika informasi tidak ada:

gunakan default yang paling masuk akal.

Output HARUS mengikuti schema JSON.
`,
                    },
                ],
            },
            config: {
                responseMimeType: "application/json",
                responseSchema: transactionSchema,
            },
        });

        return JSON.parse(response.text!);
    }
}