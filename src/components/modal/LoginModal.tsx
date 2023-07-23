import React from 'react';
import GoogleLoginButton from '../button/GoogleLoginButton';
import KakaoLoginButton from '../button/KakaoLoginButton';
import Modal from './Modal';

const LoginModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={0}
            title='로그인 하기'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText='회원가입'
        >
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4 justify-center items-center h-4/5 p-5'>
                    <KakaoLoginButton />
                    <GoogleLoginButton />
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
        </Modal>
    );
};

export default LoginModal;
