'use client';

import { getGoogleAccessToken } from '@/apis/user/login';
import { emailState, isLoggedInState } from '@/states/user';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const GoogleOAuth = () => {
    const router = useRouter();
    const params = useSearchParams();
    const code = params.get('code');
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const setEmail = useSetRecoilState(emailState);

    useEffect(() => {
        if (code)
            getGoogleAccessToken().then((res) => {
                if (res !== undefined) {
                    setEmail(res.email);
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

export default GoogleOAuth;
