"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { cn } from "cn";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface IncomeExpenseChartItem {
    label: string;
    income: number;
    expense: number;
}

const data: IncomeExpenseChartItem[] = [
    {
        label: "W1",
        income: 4500000,
        expense: 3200000,
    },
    {
        label: "W2",
        income: 6200000,
        expense: 4100000,
    },
    {
        label: "W3",
        income: 5200000,
        expense: 4800000,
    },
    {
        label: "W4",
        income: 7100000,
        expense: 5600000,
    },
];

const chartConfig = {
    income: {
        label: "Income",
        color: "var(--color-primary)",
    },
    expense: {
        label: "Expense",
        color: "var(--color-destructive)",
    },
} satisfies ChartConfig

type FilterType = "this-week" | "this-month" | "3M" | "6M" | "1Y";

export function ChartBar() {
    const [filter, setFilter] = useState<FilterType>("this-week");

    const listFilter = [
        {
            label: "This Week",
            value: "this-week"
        },
        {
            label: "This Month",
            value: "this-month"
        },
        {
            label: "3M",
            value: "3M"
        },
        {
            label: "6M",
            value: "6M"
        },
        {
            label: "1Y",
            value: "1Y"
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <span className="font-bold text-xl">Income VS Expense</span>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1 font-light">
                            <span className="w-3 h-3 rounded-full bg-primary" /> In
                        </div>
                        <div className="flex items-center gap-1 font-light">
                            <span className="w-3 h-3 rounded-full bg-destructive " /> Out
                        </div>
                    </div>
                </CardTitle>
                <Card className="bg-primary-foreground py-3">
                    <div className="grid grid-cols-5 px-3 items-center">
                        {listFilter.map((item) => (
                            <Button
                                key={item.value}
                                variant="ghost"
                                className={cn(
                                    "rounded-sm hover:bg-primary/10 py-0.5 h-full flex items-center",
                                    filter === item.value && "bg-primary/30"
                                )}
                                onClick={() => setFilter(item.value as FilterType)}
                            >
                                <span className="w-full text-wrap leading-tight">
                                    {item.label}
                                </span>
                            </Button>
                        ))}
                    </div>
                </Card>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="label"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar dataKey="income" fill="var(--color-income)" radius={4} />
                        <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
