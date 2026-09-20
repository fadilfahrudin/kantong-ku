"use client"

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { DETAIL_PAGE } from "@/config/detail-page";
import { DetailPageType } from "@/types/detail-page.type";

const HeaderDetail = () => {
    const route = useRouter();
    const pathName = usePathname();

    const getHeaderConfig: DetailPageType = useMemo(() => {
        const config = DETAIL_PAGE.find(url => url.pathName === pathName)
        return {
            pathName: config?.pathName ?? '',
            showBackButton: config?.showBackButton ?? false,
            title: config?.title ?? ''
        }
    }, [pathName])

    return (
        <header className='shadow-md w-full max-w-lg mx-auto h-16 p-4 sticky z-10 left-0 top-0 bg-white'>
            <div className="flex items-center gap-2">
                {getHeaderConfig.showBackButton &&
                    <button
                        onClick={() => route.back()}
                        className="cursor-pointer"
                    >
                        <ArrowLeft className="text-2xl" />
                    </button>
                }
                <h1 className="font-bold text-2xl">{getHeaderConfig.title}</h1>
            </div>
        </header>
    )
}

export default HeaderDetail;