import React from 'react';
import GoogleLoginButton from '../button/GoogleLoginButton';
import KakaoLoginButton from '../button/KakaoLoginButton';
import Modal from './Modal';
import LoginSignUpModal from './LoginSignUpModal';

interface Props {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

const LoginModal = ({
    setIsModal,
    setIsSignUp,
    setIsLogin,
    setIsLoggedIn,
    title
}: Props) => {
    const loginToSignUp = () => {
        setIsLogin(false);
        setIsSignUp(true);
    };
    const signUpToLogin = () => {
        setIsLogin(true);
        setIsSignUp(false);
    };
    return (
        <LoginSignUpModal
            title={`${title === '로그인' ? '로그인' : '회원가입'} 하기`}
            setModalState={setIsModal}
            onClickCompleteButton={
                title === '로그인' ? loginToSignUp : signUpToLogin
            }
            completeText={title === '로그인' ? '회원가입' : '로그인'}
        >
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4 justify-center items-center h-4/5 p-5'>
                    <KakaoLoginButton
                        setIsModal={setIsModal}
                        setIsLoggedIn={setIsLoggedIn}
                        title={title}
                    />
                    <GoogleLoginButton title={title} />
                </div>
                <div className='text-xs text-center text-grey p-5'>
                    소셜 로그인으로 가입 시&nbsp;
                    <span className='text-kakao-color'>
                        이용약관, 개인정보처리방침, 전자금융거래약관
                    </span>
                    에 <br />
                    동의함으로 처리됩니다.
                </div>
            </div>
        </LoginSignUpModal>
    );
};

export default LoginModal;
