'use client'
import { Landmark } from 'lucide-react'
import { use } from 'react'

interface Props {
    params: Promise<{ slug: string }>
}

export default function DetailWallet({ params }: Props) {
    const { slug } = use(params)
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-2">
                <div className='aspeck-square grow-0 h-20 p-5 flex justify-center items-center rounded-xl bg-primary-foreground'>
                    <Landmark size={28} />
                </div>
                <div className='flex flex-col'>
                    <span>BCA Bank Account</span>
                    <span className='ml-2 font-semibold'>2167289</span>
                    <span className='block font-bold text-2xl'>Rp.546.9000</span>
                </div>
            </div>
        </div> 
    )
}