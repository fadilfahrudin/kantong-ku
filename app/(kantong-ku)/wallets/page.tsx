import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowDown, ArrowUp, Landmark, Plus, TrendingUp } from 'lucide-react'
import React from 'react'

export default function Wallets() {
    return (
        <div className='flex flex-col gap-6 p-4'>
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
                        <div className="grid grid-cols-3 gap-2 bg-primary-foreground p-3 rounded-xl">
                            <div>
                                <span className='flex'><ArrowDown className='text-primary' size={16} /> Income</span>
                                <span className='text-xl font-bold break-all'>Rp10.500.000</span>
                            </div>
                            <div>
                                <span className='flex'><ArrowUp className='text-destructive' size={16} /> Expanse</span>
                                <span className='text-xl font-bold break-all'>Rp7.250.000</span>
                            </div>
                            <div className='text-wrap'>
                                <span className='flex'><TrendingUp className='text-primary' size={16} /> Income</span>
                                <span className='text-xl font-bold break-all'>Rp10.500.000</span>
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
                        <span>2 accounts</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
