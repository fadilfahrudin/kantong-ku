import HeaderDetail from "@/components/layouts/HeaderDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Detail",
    description: "Detail app",
};

export default function DetailLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <HeaderDetail />
            <main className="w-full max-w-lg flex-1 mx-auto bg-white relative p-4">
                {children}
            </main>
        </>
    );
};
