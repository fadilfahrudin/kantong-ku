import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='shadow-md w-full h-16 p-4 sticky z-10 left-0 top-0 bg-white'>
            <div className="flex justify-between items-center">
                <div className='w-29.5 h-8.5 overflow-hidden'>
                    <Image src="/img/logo-landscape.png" alt="logo" width={100} height={32} />
                </div>
                <div className='w-8 h-8 rounded-full overflow-hidden'>
                    <Image src="/img/dummy.png" alt="logo" width={32} height={32} />
                </div>
            </div>
        </div>
    )
}

export default Header;