
export type WalletType = 'bank' | 'e-wallet' | 'cash';

export interface Wallet {
    id: number;
    name: string;
    walletType: WalletType;
    accountNumber?: string;
    balance: number;
    initialBalance: number;
    currency: string;
    createdAt: string;
    updatedAt: string;
}
