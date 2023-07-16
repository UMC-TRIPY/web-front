export const splitAuthCode = async () => {
    const code = window.location.href.split('?')[1].split('&')[0].slice(5);
    return code;
};

export const kakaoInit = () => {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
    }
    return kakao;
};
