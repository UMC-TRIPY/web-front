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

        console.log('kakao', result.data.user);

        console.log('kakao accessToken 발급 성공: ', result.data.access_token);
        localStorage.setItem('uid', String(result.data.user.user_index));
        localStorage.setItem('access', result.data.access_token);
        localStorage.setItem('refresh', result.data.refresh_token);
        return result.data.user;
    } catch (error: any) {
        console.log('getKakaoAccessToken 에러: ', error);
        if (error.response.status === 401) {
            const result = await getRefresh();
            console.log('에러시 재발급: ', result);
            if (result) {
                error.config.headers.Authorization = result.data.access_token;
                await Server.post(error.config.url, error.config);
            }
        }
    }
};

export const getGoogleAccessToken = async () => {
    const code = splitAuthCode();
    console.log('google authCode: ', code);
    try {
        const result = await Server.post<TokenReturnType>('/auth/google', {
            code
        });
        console.log('google accessToken 발급 성공: ', result.data);
        localStorage.setItem('uid', String(result.data.user.user_index));
        localStorage.setItem('access', result.data.access_token);
        localStorage.setItem('refresh', result.data.refresh_token);
        return result.data.user;
    } catch (error: any) {
        console.log('getGoogleAccessToken 에러: ', error);
        if (error.response.status === 401) {
            const result = await getRefresh();
            console.log('에러시 재발급: ', result);
            if (result) {
                error.config.headers.Authorization = result.data.access_token;
                await Server.post(error.config.url, error.config);
            }
        }
    }
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

export const deleteAccount = async () => {
    try {
        const uid = localStorage.getItem('uid');
        await Server.delete(`/mypage/user/delete/${uid}`);
        localStorage.clear();
    } catch (error) {
        console.log('회원탈퇴 에러:', error);
    }
};

export const editInformation = async (
    profileImg: string,
    nationality: string
) => {
    try {
        const uid = localStorage.getItem('uid');
        await Server.put(`/mypage/user/info/${uid}`, {
            profileImg,
            nationality
        }).then(() => alert('수정이 완료되었습니다.'));
    } catch (error: any) {
        console.log('회원정보 수정 에러:', error);
        alert('네트연결에 실패하였습니다.');
    }
};

export const completeSignup = async (nickname: string) => {
    try {
        const user_index = localStorage.getItem('uid');
        const result = await Server.post('/auth/nickname', {
            user_index,
            nickname
        });
        return result.data;
    } catch (error) {
        console.log('회원가입 실패: ', error);
    }
};
