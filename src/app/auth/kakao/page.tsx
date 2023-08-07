'use client';

import { getKakaoAccessToken } from '@/apis/user';
import { splitAuthCode } from '@/utils/oauth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const KakaoOAuth = () => {
    const router = useRouter();

    useEffect(() => {
        // TODO: authCode를 서버에 넘겨준 다음 200 받으면 메인 페이지로 이동
        getKakaoAccessToken().then(() => router.push('/'));
    }, [router]);
    return (
        <div>
            <div>카카오 리다이렉트 페이지</div>
        </div>
    );
};

export default KakaoOAuth;
