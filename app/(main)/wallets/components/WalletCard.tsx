import { Card } from "@/components/ui/card"
import { WalletIcon } from "@/components/ui/WalletIcon";
import { Wallet } from "@/types/wallets.type"
import Link from "next/link"

type WalletCardProps = Wallet;

export const WalletCard: React.FC<WalletCardProps> = ({
    id,
    walletType,
    name,
    balance,
    currency,
    accountNumber
}) => {

    return (
        <Card>
            <Link href={`/wallets/detail/${id}`}>
                <div className='grid grid-cols-6 gap-2 px-4'>
                    <div className='aspeck-square h-auto col-span-1 flex justify-center items-center rounded-md bg-primary-foreground'>
                        <WalletIcon walletType={walletType} />
                    </div>
                    <div className='col-span-4'>
                        <span className="font-semibold">{name}</span>
                        {
                            walletType === 'bank' && (
                                <span className='ml-2'>{accountNumber}</span>
                            )
                        }
                        <span className='block font-bold text-xl'>{currency}. {balance.toLocaleString()}</span>
                    </div>
                    <div className='bg-primary/10 h-max text-center py-1 text-primary rounded-xl'>Active</div>
                </div>
            </Link>
        </Card>
    )
}