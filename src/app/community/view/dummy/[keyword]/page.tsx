'use client';

import React from 'react';
import CommonHeader from "@/components/maincommunity/CommonHeader";
import ViewComments from "@/components/viewcommunity/viewComments";
import { usePathname } from 'next/navigation';
import DummyHeader from '@/components/viewcommunity/dummy/dummyHeader';
import DummyContent from '@/components/viewcommunity/dummy/dummyContent';

function restoreTitle(encodedTitle: string): string {
    const decodedTitle = decodeURIComponent(encodedTitle);
    return decodedTitle.replace(/-/g, ' ');
}

export default function Page() {
    const pathUrl = usePathname();
    const path = pathUrl.replace('/community/view/dummy/', ''); 
    
    const keyword = restoreTitle(path);

    return (
        <div>
            <CommonHeader />
            <DummyHeader keyword={keyword} />
            <DummyContent keyword={keyword} />
            <ViewComments />
        </div>
    )
}