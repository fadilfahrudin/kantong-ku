import {
  CircleEllipsis,
  Clapperboard,
  Gamepad2,
  Globe,
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
      iconClassName = "text-red-500 bg-red-400/20"
      break

    case "shopping":
      Icon = ShoppingBag
      iconClassName = "text-green-500 bg-green-400/20"
      break

    case "entertainment":
      Icon = Clapperboard
      iconClassName = "text-pink-500 bg-pink-400/20"
      break

    case "transportation":
      Icon = TrainFront
      iconClassName = "text-primary/80 bg-primary/20"
      break

    case "fun":
      Icon = Gamepad2
      iconClassName = "text-lime-500 bg-lime-400/20"
      break

    case "salary":
      Icon = WalletCards
      iconClassName = "text-green-500 bg-green-400/20"
      break

    case "electricity":
      Icon = Zap
      iconClassName = "text-yellow-950 bg-yellow-400/20"
      break
    case "internet":
      Icon = Globe
      iconClassName = "text-blue-500 bg-blue-400/20"
      break
    case "investment":
      Icon = WalletCards
      iconClassName = "text-purple-500 bg-purple-400/20"
      break
    case "others":
      Icon = CircleEllipsis
      iconClassName = "text-gray-900 bg-gray-400/20"
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
