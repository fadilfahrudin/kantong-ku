export interface AppConfig {
    spreadsheetId: string;
    sheetName: string;
    webhookSecret: string;
    tokenStatus: 'valid' | 'expired' | 'missing';
}