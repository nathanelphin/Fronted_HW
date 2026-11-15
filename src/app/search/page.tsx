
'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";




export default function searchPage() {

    //why is this consider hard navigation?
    const router = useRouter();
    const pathName = usePathname();
    //why search Param?
    
    const searchParams = useSearchParams();

    return (
        <div>
            PathName: {pathName}
            <button className="border p-4 rounded" onClick={() => router.push('/')}>
                HomePage    
            </button>
            <button className="border p-4 rounded" onClick={() => router.forward()}>
                nextPage
            </button>
            <button className="border p-4 rounded" onClick={() => router.back()}>
                Backward
            </button>

            Search Params: {searchParams.get('category')}

        </div>
    )
}
