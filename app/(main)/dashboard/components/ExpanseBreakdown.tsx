"use client"

import { ChartPie } from "lucide-react"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { TransactionIcon } from "@/components/ui/TransactionIcon"
import { TransactionCategory } from "@/types/transaction.type"
import { cn } from "cn"

export const description = "A donut chart with text"

type ChartConfigLocal = {
    [key: string]: {
        label: string;
    };
}

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

const chartConfig: ChartConfigLocal = {
    amount: {
        label: "Amount",
    },
    food: {
        label: "Food & Drinks",
    },
    shopping: {
        label: "Shopping"
    },
    entertainment: {
        label: "Entertainment",
    },
    transport: {
        label: "Transport",
    },
    fun: {
        label: "Fun",
    },
    salary: {
        label: "Salary",
    },
    electricity: {
        label: "Electricity",
    },
    other: {
        label: "Other",
    },
} satisfies ChartConfig

export function ExpanseBreakdown() {
    const totalExpense = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.amount, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="flex justify-between items-center pb-0">
                <div>
                    <CardTitle>Where your money goes</CardTitle>
                    <CardDescription>Expense breakdown this month</CardDescription>
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full">
                    <ChartPie size={18} />
                </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-62.5"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="amount"
                            nameKey="transactionCategory"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-md font-bold"
                                                >
                                                    Total Expense
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground text-xl"
                                                >
                                                    {totalExpense.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>

                {/* List Expenses */}
                <ul className="flex flex-col gap-2.5">
                    {chartData.map((item) => {
                        const categoryLabel = chartConfig[item.transactionCategory]?.label ?? item.transactionCategory
                        return (
                            <li key={item.transactionCategory} className="flex gap-2.5 items-center">
                                <TransactionIcon style={{ backgroundColor: item.fill }} className={cn("text-white w-8 h-8")} iconSize={16} category={item.transactionCategory as TransactionCategory} />
                                <div className="text-xs">
                                    <span>{categoryLabel}</span> <br /> <p>{Math.round((item.amount / totalExpense) * 100)}% of expense</p>
                                </div>
                                <span className="ms-auto font-bold">Rp{item.amount.toLocaleString()}</span>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}
