import { kakaoInit } from '@/utils/oauth';

const KakaoLoginButton = () => {
    const kakaoLogin = async () => {
        const kakao = kakaoInit();
        kakao.Auth.authorize({
            redirectUri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`
        });
    };

    return (
        <div>
            <div onClick={kakaoLogin}>kakao</div>
        </div>
    );
};

export default KakaoLoginButton;
