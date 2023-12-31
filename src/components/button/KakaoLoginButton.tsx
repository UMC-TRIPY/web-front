import { kakaoInit } from '@/utils/oauth';
import { RiKakaoTalkFill } from 'react-icons/ri';

interface Props {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

const KakaoLoginButton = ({ setIsModal, setIsLoggedIn, title }: any) => {
    const kakaoLogin = async () => {
        // setIsModal(false);
        // setIsLoggedIn(true);
        const kakao = kakaoInit();
        kakao.Auth.authorize({
            redirectUri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`
        });
    };

    return (
        <>
            <div
                className='flex w-3/5 border-2 border-kakao-color border-black cursor-pointer h-16 rounded-xl'
                onClick={kakaoLogin}
            >
                <div className='flex bg-kakao-color basis-2/12 justify-center items-center text-2xl'>
                    <RiKakaoTalkFill />
                </div>
                <div className='flex text-dark-black basis-10/12 justify-center items-center'>
                    {`카카오로 ${
                        title === '로그인' ? '로그인하기' : '가입하기'
                    }`}
                </div>
            </div>
        </>
    );
};

export default KakaoLoginButton;
