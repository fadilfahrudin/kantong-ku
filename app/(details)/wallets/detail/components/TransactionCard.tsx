import { TransactionIcon } from "@/components/ui/TransactionIcon";
import { DetailedTransaction } from "@/types/transaction.type";
import { dayjs } from "@/utils/dayjs";
import { cn } from "cn";
import { BusFront, Ellipsis, Film, Globe, HandCoins, Landmark, UtensilsCrossed, Zap } from "lucide-react";

type TransactionCardProps = DetailedTransaction;

const TransactionCard = ({
    id,
    title,
    transactionType,
    amount,
    transactionDate,
    transactionCategory,
    remarks,
}: TransactionCardProps) => {
    console.log(remarks, "remarks")
    console.log(id, "id")
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <TransactionIcon category={transactionCategory} />
                <div className="flex flex-col">
                    <span className='font-semibold'>{title || 'BCA Bank Account'}</span>
                    <span className='text-sm text-muted-foreground'>{dayjs(transactionDate).format('DD MMM YYYY')}</span>
                </div>
            </div>
            <span className={cn("font-semibold", {
                "text-green-500": transactionType === "income",
                "text-red-500": transactionType === "expense"
            })}>
                {transactionType === "income" ? `+ Rp.${amount?.toLocaleString()}` : `- Rp.${amount?.toLocaleString()}`}
            </span>
        </div>
    )
}

export default TransactionCard