"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Wallet } from '@/types/wallets.type'
import { ArrowDown, ArrowUp, Landmark, Plus, Smartphone, WalletCards } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { WalletCard } from './components/WalletCard'

const MOCK_DATA_LIST_WALLETS: Wallet[] = [
    {
        id: 1,
        walletType: 'bank',
        name: 'BCA Bank Account',
        accountNumber: '2167289',
        initialBalance: 5469000,
        balance: 5469000,
        currency: 'IDR',
        createdAt: '2023-10-01',
        updatedAt: '2023-10-01',
    },
    {
        id: 2,
        walletType: 'bank',
        name: 'Mandiri Bank Account',
        accountNumber: '2167289',
        initialBalance: 5469000,
        balance: 5469000,
        currency: 'IDR',
        createdAt: '2023-10-01',
        updatedAt: '2023-10-01'
    },
    {
        id: 3,
        walletType: 'e-wallet',
        name: 'Gopay Wallet',
        initialBalance: 5469000,
        balance: 5469000,
        currency: 'IDR',
        createdAt: '2023-10-01',
        updatedAt: '2023-10-01'
    },
    {
        id: 4,
        walletType: 'e-wallet',
        name: 'Dana Wallet',
        initialBalance: 5469000,
        balance: 5469000,
        currency: 'IDR',
        createdAt: '2023-10-01',
        updatedAt: '2023-10-01'
    },
    {
        id: 5,
        walletType: 'cash',
        name: 'Fadils Wallet',
        initialBalance: 5469000,
        balance: 5469000,
        currency: 'IDR',
        createdAt: '2023-10-01',
        updatedAt: '2023-10-01'
    }
]

export default function Wallets() {
    const route = useRouter()
    const pathname = usePathname()

    return (
        <div className='flex flex-col gap-6 min-h-screen'>
            {/* header */}
            <section className='flex justify-between gap-4'>
                <div className="flex flex-col">
                    <h1 className='font-semibold text-2xl'>My Wallets</h1>
                    <p className='text-accent-foreground/50'>
                        Manage where your money is stored across banks, e-wallets, and cash.
                    </p>
                </div>
                <Button
                    className="rounded-md shrink-0"
                    onClick={() => route.push(`${pathname}/create`)}
                >
                    <Plus />
                    <span>Add Wallet</span>
                </Button>
            </section>

            {/* Total stored Wallets */}
            <section>
                <Card>
                    <div className="p-5 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span className='uppercase font-semibold'>Total Stored Wallets</span>
                                    <span className='w-2 h-2 bg-primary/60 rounded-full' />
                                </div>
                                <span className="px-3 bg-sky-300 rounded-xl font-light">5 Active</span>
                            </div>
                            <div>
                                <span className='text-3xl font-bold'>Rp13.500.000</span>
                                <p className='font-light'>Across 5 active wallets</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 bg-primary-foreground p-3 rounded-xl">
                            <div>
                                <span className='flex'><ArrowDown className='text-primary' size={16} /> Income</span>
                                <span className='text-xl font-bold break-all text-primary'>Rp10.500.000</span>
                            </div>
                            <div>
                                <span className='flex'><ArrowUp className='text-destructive' size={16} /> Expanse</span>
                                <span className='text-xl font-bold break-all text-destructive/80'>Rp7.250.000</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Wallets List */}
            <section className='flex flex-col gap-4'>
                {/* Bank List */}
                <div className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <div className='flex items-center gap-1'>
                            <Landmark />
                            <span className='font-bold'>Bank Accounts</span>
                        </div>
                        <span>{MOCK_DATA_LIST_WALLETS.filter((wallet) => wallet.walletType === 'bank').length} accounts</span>
                    </div>
                    {MOCK_DATA_LIST_WALLETS.filter((wallet) => wallet.walletType === 'bank').map((wallet) => (
                        <WalletCard key={wallet.id} {...wallet} />
                    ))}
                </div>

                {/* E Wallets */}
                <div className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <div className='flex items-center gap-1'>
                            <Smartphone />
                            <span className='font-bold'>E-Wallets</span>
                        </div>
                        <span>{MOCK_DATA_LIST_WALLETS.filter((wallet) => wallet.walletType === 'e-wallet').length} Wallets</span>
                    </div>
                    {MOCK_DATA_LIST_WALLETS.filter((wallet) => wallet.walletType === 'e-wallet').map((wallet) => (
                        <WalletCard key={wallet.id} {...wallet} />
                    ))}
                </div>

                {/* Cash */}
                <div className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <div className='flex items-center gap-1 '>
                            <WalletCards />
                            <span className='font-bold'>Cash</span>
                        </div>
                        <span>{MOCK_DATA_LIST_WALLETS.filter((wallet) => wallet.walletType === 'cash').length} Wallets</span>
                    </div>
                    {MOCK_DATA_LIST_WALLETS.filter((wallet) => wallet.walletType === 'cash').map((wallet) => (
                        <WalletCard key={wallet.id} {...wallet} />
                    ))}
                </div>
            </section>
        </div>
    )
}
