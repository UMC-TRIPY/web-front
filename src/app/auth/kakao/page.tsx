'use client';

import { getKakaoAccessToken } from '@/apis/user/login';
import { splitAuthCode } from '@/utils/oauth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const KakaoOAuth = () => {
    const router = useRouter();
    const params = useSearchParams();
    const code = params.get('code');

    useEffect(() => {
        if (code)
            getKakaoAccessToken().then(() => {
                console.log('code: ', code);
                router.push('/');
            });
    }, [code, router]);
    return <div></div>;
};

export default KakaoOAuth;
