'use client';

import { getKakaoAccessToken } from '@/apis/user/login';
import { isLoggedInState } from '@/states/user';
import { splitAuthCode } from '@/utils/oauth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const KakaoOAuth = () => {
    const router = useRouter();
    const params = useSearchParams();
    const code = params.get('code');
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);

    useEffect(() => {
        if (code)
            getKakaoAccessToken().then(() => {
                console.log('code: ', code);
                setIsLoggedIn(true);
                router.push(`${process.env.NEXT_PUBLIC_HOME_URL}/`);
            });
    }, [code, router, setIsLoggedIn]);
    return <div></div>;
};

export default KakaoOAuth;
