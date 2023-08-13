import { splitAuthCode } from '@/utils/oauth';
import { Server } from '../setting';
import { LogoutReturnType, RefreshReturnType, TokenReturnType } from '../types';

export const getKakaoAccessToken = async () => {
    const code = splitAuthCode();
    console.log('kakao authCode: ', code);
    try {
        const result = await Server.post<TokenReturnType>('/auth/kakao', {
            code
        });
        console.log('kakao accessToken 발급 성공: ', result.data.access_token);
        localStorage.setItem('uid', String(result.data.uid));
        localStorage.setItem('access', result.data.access_token);
        localStorage.setItem('refresh', result.data.refresh_token);
    } catch (error: any) {
        console.log('getKakaoAccessToken 에러: ', error);
        if (error.response.status === 401) {
            const result = await getRefresh();
            console.log('에러시 재발급: ', result);
            if (result) {
                error.config.headers.Authorization = result.data.access_token;
                return await Server.post(error.config.url, error.config);
            }
        }
    }
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
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');
    const headers = { Authorization: `Bearer ${accessToken}` };
    // TODO: return 값으로 받아온 access token 으로 재요청
    try {
        return await Server.post<RefreshReturnType>(
            '/auth/refresh',
            { refresh_token: refreshToken },
            { headers }
        );
    } catch (error) {
        console.log('액세스 토큰 갱신 실패: ', error);
    }
};

export const logout = async () => {
    const refreshToken = localStorage.getItem('refresh');
    try {
        localStorage.clear();
        return await Server.post<LogoutReturnType>('/auth/logout', {
            refresh_token: refreshToken
        });
    } catch (error) {
        console.log('로그아웃 에러:', error);
    }
};
