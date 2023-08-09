import { splitAuthCode } from '@/utils/oauth';
import { Server } from '../setting';
import { LogoutReturnType, RefreshReturnType, TokenReturnType } from '../types';

export const getKakaoAccessToken = async () => {
    const authCode: string = splitAuthCode();
    console.log('kakao authCode: ', authCode);
    const result = await Server.post<TokenReturnType>('/auth/kakao', {
        code: authCode
    });
    console.log('kakao API: ', result);
    // localStorage.set('access', result.data.access_token);
    // localStorage.set('refresh', result.data.refresh_token);
};

export const getGoogleAccessToken = async () => {
    const authCode: string = splitAuthCode();
    console.log('google authCode: ', authCode);
    const result = await Server.post<TokenReturnType>('/auth/google', {
        code: authCode
    });
    console.log('google API: ', result);
    // localStorage.set('access', result.data.access_token);
    // localStorage.set('refresh', result.data.refresh_token);
};

// 만료된 액세스 토큰 갱신
export const getRefresh = async () => {
    const accessToken: string = localStorage.get('access');
    const refreshToken: string = localStorage.get('refresh');
    // TODO: return 값으로 받아온 access token 으로 재요청
    const result = await Server.post<RefreshReturnType>(
        '/auth/refresh',
        { refresh_token: refreshToken },
        { headers: { Authorization: accessToken } }
    );
    console.log('refresh: ', result);
};

export const logout = async () => {
    const refreshToken: string = localStorage.get('refresh');
    return await Server.post<LogoutReturnType>('/auth/logout', {
        refresh_token: refreshToken
    });
};
