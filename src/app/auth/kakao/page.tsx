'use client';

import { splitAuthCode } from '@/utils/oauth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const KakaoOAuth = () => {
    const [authCode, setAuthCode] = useState<string>();
    const router = useRouter();

    useEffect(() => {
        // TODO: authCode를 서버에 넘겨준 다음 200 받으면 메인 페이지로 이동
        splitAuthCode().then((res) => setAuthCode(res));
        // router.push('/');
    }, []);
    return (
        <div>
            <div>카카오 리다이렉트 페이지</div>
            <div>{authCode}</div>
        </div>
    );
};

export default KakaoOAuth;
