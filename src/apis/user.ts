import { splitAuthCode } from '@/utils/oauth';
import { Server } from './setting';

export const getKakaoAccessToken = async () => {
    const authCode = splitAuthCode();
    console.log('kakao authCode: ', authCode);
    const result = await Server.post('/api/auth/kakao', { code: authCode });
    console.log('kakao API: ', result);
    // localStorage.set('access', result.data.access_token);
    // localStorage.set('refresh', result.data.refresh_token);
};

export const getGoogleAccessToken = async () => {
    const authCode = splitAuthCode();
    console.log('google authCode: ', authCode);
    const result = await Server.post('/api/auth/google', { code: authCode });
    console.log('google API: ', result);
    // localStorage.set('access', result.data.access_token);
    // localStorage.set('refresh', result.data.refresh_token);
};
