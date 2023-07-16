'use client';

import { getAuthCode } from '@/utils/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const GoogleOAuth = () => {
    const [authCode, setAuthCode] = useState<string>();
    const router = useRouter();

    useEffect(() => {
        // TODO: authCode를 서버에 넘겨준 다음 200 받으면 메인 페이지로 이동
        getAuthCode().then((res) => setAuthCode(res));
        router.push('/');
    }, []);
    return <div>인가코드 리다이렉트 페이지</div>;
};

export default GoogleOAuth;
