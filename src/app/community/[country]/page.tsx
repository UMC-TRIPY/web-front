'use client';

import CountryPosts from '@/components/countrycommunity/CountyPosts';
import Feeds from '@/components/countrycommunity/Feeds';
import HotPosts from '@/components/countrycommunity/HotPosts';
import CommonHeader from '@/components/maincommunity/CommonHeader';
import Promotion from '@/components/maincommunity/Promotion';

export default function Page() {
    return (
        <div>
            <CommonHeader />
            <HotPosts />
            <Feeds />
            <CountryPosts />
            <Promotion />
        </div>
    );
}
