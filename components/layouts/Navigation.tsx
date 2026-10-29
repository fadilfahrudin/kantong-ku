'use client'
import React, { forwardRef } from 'react'
import { cn } from 'cn';
import { ChartNoAxesColumn, House, Plus, ScrollText, WalletMinimal } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

// Mengambil seluruh props bawaan HTML button
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    className?: string
}

// forwardRef menerima tipe Ref elemen (HTMLButtonElement) dan tipe Props (ButtonProps)
const ButtonNavigation = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'w-auto h-11 flex flex-col justify-center items-center',
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

ButtonNavigation.displayName = 'ButtonNavigation';

const Navigation = () => {
    const route = useRouter();
    const pathName = usePathname();
    return (
        <nav className='sticky -bottom-1 bg-white h-auto left-0 w-full max-w-lg mx-auto p-4 inset-shadow-sm'>
            <div className="grid grid-cols-5 gap-2">
                <ButtonNavigation
                    onClick={() => route.push('/dashboard')}
                    className={cn(pathName === '/dashboard' && 'text-primary')}
                >
                    <House size={30} className='text-2xl' />
                    <span className='text-xs'>Dashboard</span>
                </ButtonNavigation>
                <ButtonNavigation
                    onClick={() => route.push('/wallets')}
                    className={cn(pathName === '/wallets' && 'text-primary')}
                >
                    <WalletMinimal size={30} />
                    <span className='text-xs'>Wallets</span>
                </ButtonNavigation>
                <ButtonNavigation className="bg-primary w-15 h-15 shadow-2xl aspect-square -translate-y-10 rounded-full inset-shadow-2xs">
                    <Plus size={36} className='text-primary-foreground' />
                </ButtonNavigation>
                <ButtonNavigation>
                    <ScrollText size={30} />
                    <span className='text-xs'>Transaction</span>
                </ButtonNavigation>
                <ButtonNavigation>
                    <ChartNoAxesColumn size={30} />
                    <span className='text-xs'>Report</span>
                </ButtonNavigation>
            </div>
        </nav>
    )
}

export default Navigation;