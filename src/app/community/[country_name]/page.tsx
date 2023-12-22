'use client';

import CountryPosts from '@/components/countrycommunity/CountyPosts';
import Feeds from '@/components/countrycommunity/Feeds';
import HotPosts from '@/components/countrycommunity/HotPosts';
import CommonHeader from '@/components/maincommunity/CommonHeader';
import Promotion from '@/components/maincommunity/Promotion';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function Page() {
    const [country, setCountry] = useState<string>('');
    const params = useParams();
    useEffect(() => {
        const location = params.country_name;
        if (location === 'japan') {
            setCountry('일본');
        } else if (location === 'vietnam') {
            setCountry('베트남');
        } else if (location === 'uk') {
            setCountry('영국');
        } else if (location === 'france') {
            setCountry('프랑스');
        } else if (location === 'italy') {
            setCountry('이탈리아');
        } else if (location === 'spain') {
            setCountry('스페인');
        }
    }, []);

    return (
        <div>
            <CommonHeader />
            <HotPosts country={country} />
            <Feeds />
            <CountryPosts country={country} />
            <Promotion />
        </div>
    );
}
