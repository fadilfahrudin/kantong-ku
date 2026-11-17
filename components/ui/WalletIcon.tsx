import { WalletType } from '@/types/wallets.type';
import { cn } from 'cn';
import {
    Banknote,
    BriefcaseBusiness,
    LucideIcon,
    WalletCards
} from 'lucide-react';

type WalletIconProps = {
    walletType: WalletType;
    iconSize?: number;
    className?: string;
    style?: React.CSSProperties;
}

const IconContainer = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
    return (
        <div className={cn("flex aspect-square h-full rounded-md items-center justify-center p-2", className)} style={style}>
            {children}
        </div>
    )
}

export function WalletIcon({
    walletType,
    iconSize = 22,
    className,
    style,
}: WalletIconProps) {

    let Icon: LucideIcon
    let iconClassName = "text-white"

    switch (walletType) {
        case "bank":
            Icon = BriefcaseBusiness
            iconClassName = "bg-wallet-bank"
            break

        case "e-wallet":
            Icon = WalletCards
            iconClassName = "bg-wallet-e-wallet"
            break

        case "cash":
            Icon = Banknote
            iconClassName = "bg-wallet-cash"
            break
    }

    return (
        <IconContainer
            className={cn(iconClassName, className)}
            style={style}
        >
            <Icon size={iconSize} />
        </IconContainer>
    )
}
