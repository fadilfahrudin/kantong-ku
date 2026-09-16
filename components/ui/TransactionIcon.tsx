import {
  CircleEllipsis,
  Clapperboard,
  Gamepad2,
  LucideIcon,
  ShoppingBag,
  TrainFront,
  Utensils,
  WalletCards,
  Zap,
} from 'lucide-react'

import type { TransactionCategory } from '@/types/transaction.type'
import { cn } from 'cn'

type TransactionIconProps = {
  category: TransactionCategory;
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

export function TransactionIcon({
  category,
  iconSize = 16,
  className,
  style,
}: TransactionIconProps) {

  let Icon: LucideIcon
  let iconClassName = "text-white"

  switch (category) {
    case "food":
      Icon = Utensils
      break

    case "shopping":
      Icon = ShoppingBag
      break

    case "entertainment":
      Icon = Clapperboard
      iconClassName = "text-primary"
      break

    case "transport":
      Icon = TrainFront
      iconClassName = "text-primary"
      break

    case "fun":
      Icon = Gamepad2
      iconClassName = "text-primary"
      break

    case "salary":
      Icon = WalletCards
      break

    case "electricity":
      Icon = Zap
      iconClassName = "text-yellow-950"
      break

    case "other":
      Icon = CircleEllipsis
      iconClassName = "text-gray-900"
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
