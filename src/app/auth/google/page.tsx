'use client';

import { getGoogleAccessToken } from '@/apis/user';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const GoogleOAuth = () => {
    const router = useRouter();

    useEffect(() => {
        // TODO: authCode를 서버에 넘겨준 다음 200 받으면 메인 페이지로 이동
        getGoogleAccessToken().then(() => router.push('/'));
    }, [router]);
    return (
        <div>
            <div>구글 리다이렉트 페이지</div>
        </div>
    );
};

export default GoogleOAuth;
