'use client';

import React from 'react';
import CommonHeader from "@/components/maincommunity/CommonHeader";
import ViewHeader from "@/components/viewcommunity/viewHeader";
import ViewContent from "@/components/viewcommunity/viewContent";
import ViewComments from "@/components/viewcommunity/viewComments";
import { usePathname } from 'next/navigation';

export default function Page() {
    const postIndexUrl = usePathname();
    const post_index = postIndexUrl.replace('/community/view/', ''); 
    console.log(post_index)
    return (
        <div>
            <CommonHeader />
            <ViewHeader post_index={post_index} />
            <ViewContent post_index={post_index} />
            <ViewComments />
        </div>
    )
}