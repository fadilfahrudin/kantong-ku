'use client'
import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Landmark, Search } from 'lucide-react'
import { use, useState } from 'react'
import TransactionCard from '../components/TransactionCard'
import { DetailedTransaction } from '@/types/transaction.type'

interface Props {
    params: Promise<{ slug: string }>
}

const MOCK_DATA_TRANSACTIONS: DetailedTransaction[] = [
    {
        id: 1,
        walletId: 1,
        title: 'Monthly Electricity Bill',
        transactionType: 'expense',
        transactionCategory: 'electricity',
        amount: 500000,
        transactionDate: '2023-10-01',
        remarks: 'Monthly electricity bill',
        createdAt: '2023-10-01',
        updatedAt: '2023-10-01'
    },
    {
        id: 2,
        walletId: 1,
        title: 'Internet Subscription',
        transactionType: 'expense',
        transactionCategory: 'internet',
        amount: 300000,
        transactionDate: '2023-10-02',
        remarks: 'Monthly internet subscription',
        createdAt: '2023-10-02',
        updatedAt: '2023-10-02'
    },
    {
        id: 3,
        walletId: 1,
        title: 'Salary for October',
        transactionType: 'income',
        transactionCategory: 'salary',
        amount: 10000000,
        transactionDate: '2023-10-03',
        remarks: 'Salary for October',
        createdAt: '2023-10-03',
        updatedAt: '2023-10-03'
    }
]

export default function DetailWallet({ params }: Props) {
    const { slug } = use(params)
    console.log(slug, "slug")
    const [serachName, setSearchName] = useState('')
    const [filteredTransactions, setFilteredTransactions] = useState<DetailedTransaction[]>(MOCK_DATA_TRANSACTIONS)

    const handleSearch = () => {
        const filtered = MOCK_DATA_TRANSACTIONS.filter((transaction) =>
            transaction.title.toLowerCase().includes(serachName.toLowerCase())
        );
        setFilteredTransactions(filtered);
    }

    return (
        <div className="mt-10">
            <div className="flex flex-col gap-6">
                {/* Profile wallet */}
                <div className="flex flex-col gap-2 items-center">
                    <div className='aspect-square w-15 h-15 p-5 flex justify-center items-center rounded-xl bg-primary-foreground'>
                        <Landmark size={28} />
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="flex">
                            <span>BCA Bank Account</span>
                            <span className='ml-2 font-semibold'>2167289</span>
                        </div>
                        <span className='block font-bold text-2xl'>Rp.546.9000</span>
                    </div>
                </div>

                {/* Transaction history */}
                <div className="flex flex-col gap-4">
                    {/* Search transaction name */}
                    <Field orientation="horizontal">
                        <Input
                            type="search"
                            placeholder="Search..."
                            value={serachName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                        <Button onClick={handleSearch}><Search /></Button>
                    </Field>

                    {/* List of transactions */}
                    <div className="flex flex-col gap-4">
                        {filteredTransactions.map((transaction) => (
                            <TransactionCard
                                key={transaction.id}
                                {...transaction}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}