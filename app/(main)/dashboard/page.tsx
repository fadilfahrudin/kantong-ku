"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DatePickerInput } from '@/components/ui/DatePicker'
import { ArrowDown, ArrowRight, ArrowRightLeft, ArrowUp, Banknote, CirclePlus, Ellipsis, Landmark, MoveRight, SendHorizontal, TrendingUp } from 'lucide-react'
import { ChartBar } from './components/ChartBar'
import { ExpanseBreakdown } from './components/ExpanseBreakdown'
import { TransactionIcon } from '@/components/ui/TransactionIcon'
import { cn } from 'cn'
import { TransactionCategory } from '@/types/transaction.type'

const chartData = [
    { transactionCategory: "food", amount: 275, fill: "var(--chart-1)" },
    { transactionCategory: "shopping", amount: 200, fill: "var(--chart-2)" },
    { transactionCategory: "entertainment", amount: 287, fill: "var(--chart-3)" },
    { transactionCategory: "transport", amount: 173, fill: "var(--chart-4)" },
    { transactionCategory: "fun", amount: 173, fill: "var(--chart-5)" },
    { transactionCategory: "salary", amount: 173, fill: "var(--chart-6)" },
    { transactionCategory: "electricity", amount: 173, fill: "var(--chart-7)" },
    { transactionCategory: "other", amount: 190, fill: "var(--chart-8)" },
]

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-6'>
            {/* header */}
            <section className='flex justify-between'>
                <div className="flex flex-col">
                    <h1 className='font-semibold text-2xl'>Selamat Pagi</h1>
                    <p className='text-accent-foreground/50'>Here is your financial overview.</p>
                </div>
                <DatePickerInput />
            </section>

            {/* total Balance */}
            <section className='flex justify-between'>
                <Card className='w-full h-54 p-5 bg-linear-to-br from-[#0b7063] via-primary to-[#213145] relative'>
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#00201d]/15 blur-2xl pointer-events-none" ></div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between text-xs">
                            <div className='font-semibold text-accent '>TOTAL BALANCE</div>
                            <div className='bg-primary-foreground/20 px-3 py-1 rounded-2xl text-[#6FFBBE] flex gap-2 items-center'>
                                <TrendingUp size={15} />
                                <span>
                                    +Rp500.000 this month
                                </span>
                            </div>
                        </div>
                        <span className='text-accent text-3xl font-bold'>Rp13.500.000</span>
                        <div className="grid grid-cols-4 gap-2 flex-1">
                            <div className='px-2 text-accent w-full'>
                                <Button variant="ghost" className="flex flex-col gap-1.5 hover:bg-transparent hover:text-primary-foreground h-max w-full">
                                    <div className="flex justify-center items-center w-11 h-auto aspect-square rounded-full bg-[#6FFBBE]/20">
                                        <SendHorizontal />
                                    </div>
                                    <span>Send</span>
                                </Button>
                            </div>
                            <div className='px-2 text-accent w-full'>
                                <Button variant="ghost" className="flex flex-col gap-1.5 hover:bg-transparent hover:text-primary-foreground h-max w-full">
                                    <div className="flex justify-center items-center w-11 h-auto aspect-square rounded-full bg-[#6FFBBE]/20">
                                        <CirclePlus />
                                    </div>
                                    <span>Top Up</span>
                                </Button>
                            </div>
                            <div className='px-2 text-accent w-full'>
                                <Button variant="ghost" className="flex flex-col gap-1.5 hover:bg-transparent hover:text-primary-foreground h-max w-full">
                                    <div className="flex justify-center items-center w-11 h-auto aspect-square rounded-full bg-[#6FFBBE]/20">
                                        <ArrowRightLeft />
                                    </div>
                                    <span>Transfer</span>
                                </Button>
                            </div>
                            <div className='px-2 text-accent w-full'>
                                <Button variant="ghost" className="flex flex-col gap-1.5 hover:bg-transparent hover:text-primary-foreground h-max w-full">
                                    <div className="flex justify-center items-center w-11 h-auto aspect-square rounded-full bg-[#6FFBBE]/20">
                                        <Ellipsis />
                                    </div>
                                    <span>More</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Statistics Income and Expense */}
            <section className='grid grid-cols-2 gap-3'>
                <Card className='p-3 flex flex-col gap-3'>
                    <div className="flex justify-between items-center">
                        <div className='w-8 h-8 rounded-full flex justify-center items-center bg-primary/20'>
                            <ArrowDown className='text-primary' size={18} />
                        </div>
                        <div className='text-primary w-auto px-1.5 py-0.5 h-8 rounded-full flex justify-center items-center gap-2 bg-primary/20'>
                            <ArrowUp size={12} />
                            <span>+12.5%</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs'>INCOME</span>
                        <span className='text-[15px] font-semibold text-primary/80'>Rp10.500.000</span>
                    </div>
                </Card>
                <Card className='p-3 flex flex-col'>
                    <div className="flex justify-between items-center">
                        <div className='w-8 h-8 rounded-full flex justify-center items-center bg-destructive/20'>
                            <ArrowUp className='text-destructive' size={18} />
                        </div>
                        <div className='text-destructive w-auto px-1.5 py-0.5 h-8 rounded-full flex justify-center items-center gap-2 bg-destructive/20'>
                            <ArrowUp size={12} />
                            <span>+5.2%</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs'>EXPENSE</span>
                        <span className='text-[15px] font-semibold text-destructive/80'>Rp7.250.000</span>
                    </div>
                </Card>
            </section>

            {/* My Wallets */}
            <section className='flex flex-col gap-2'>
                <div className="flex justify-between items-center">
                    <span className="font-bold">My Wallets</span>
                    <Button variant="link" className="text-primary">
                        <span>View all wallets</span>
                        <ArrowRight />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Card className='p-3 flex flex-col gap-3'>
                        <div className="flex justify-between items-center">
                            <div className='w-10 h-10 rounded-md flex justify-center items-center bg-primary/30'>
                                <Banknote size={25} className='text-primary' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs'>Cash</span>
                            <span className='text-[15px] font-semibold text-primary/80'>Rp1.250.000</span>
                        </div>
                    </Card>
                    <Card className='p-3 flex flex-col'>
                        <div className="flex justify-between items-center">
                            <div className='w-10 h-10 rounded-md flex justify-center items-center bg-gray-900'>
                                <Landmark size={25} className='text-gray-400' />
                            </div>
                            <div className='text-gray-900 w-auto px-2 py-0.5 h-8 rounded-full flex justify-center items-center gap-2 bg-gray-200'>
                                <span>Bank</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs'>BCA Account</span>
                            <span className='text-[15px] font-semibold text-primary/80'>Rp7.250.000</span>
                        </div>
                    </Card>
                </div>
            </section>

            {/*  Income VS Expense */}
            <section>
                <ChartBar />
            </section>

            {/* Expense Breakdown */}
            <section>
                <ExpanseBreakdown />
            </section>

            {/* Recent Transactions */}
            <section className='flex flex-col gap-2'>
                <Card>
                    <CardHeader>
                        <CardTitle className='flex justify-between'>
                            <span>Recent Transactions</span>
                            <Button variant="link">View all <MoveRight /></Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2.5">
                            {chartData.map((item) => {
                                return (
                                    <li key={item.transactionCategory} className="flex gap-2.5 items-center">
                                        <TransactionIcon style={{ backgroundColor: item.fill }} className={cn("text-white w-8 h-8")} iconSize={16} category={item.transactionCategory as TransactionCategory} />
                                        <div className="text-xs">
                                            <span>Indomaret Groceries</span> <br /> <p>GoPay · Today</p>
                                        </div>
                                        <div className="text-xs ms-auto text-right">
                                            <span className="font-bold">Rp{item.amount.toLocaleString()}</span>
                                            <br /> <p>Expanse</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
