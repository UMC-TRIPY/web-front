'use client';

import { getKakaoAccessToken } from '@/apis/user/login';
import { emailState, isLoggedInState } from '@/states/user';
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
            getKakaoAccessToken().then((res) => {
                if (res !== undefined) {
                    if (res.newUser) {
                        router.push('/signup');
                    } else {
                        setIsLoggedIn(true);
                        router.push('/');
                    }
                }
            });
    }, [code, router, setIsLoggedIn]);
    return <div></div>;
};

export default KakaoOAuth;
