'use client';

import AllPosts from '@/components/maincommunity/AllPosts';
import BrowseCommunity from '@/components/maincommunity/BrowseCommunity';
import CommonHeader from '@/components/maincommunity/CommonHeader';
import HotPosts from '@/components/maincommunity/HotPosts';
import Promotion from '@/components/maincommunity/Promotion';

export default function Page() {
    return (
        <div>
            <CommonHeader />
            <HotPosts />
            <BrowseCommunity />
            <AllPosts />
            <Promotion />
        </div>
    );
}
