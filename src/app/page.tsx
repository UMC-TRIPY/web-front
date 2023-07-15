'use client';

import react, { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/modal/Modal';
import GoogleLoginButton from '@/components/button/GoogleLoginButton';

export default function Home() {
    const [modal, setModal] = useState(false);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <button onClick={() => setModal(true)}>모달 예시 버튼</button>
            {modal && (
                <Modal
                    modalMode={1}
                    title='회원가입 하기'
                    setModalState={setModal}
                    onClickCompleteButton={() => setModal(false)}
                    completeText='로그인'
                >
                    <div className='p-5'>
                        모달창 테스트, 여기에 원하는 화면을 구현해 넣어주세요.
                        <GoogleLoginButton />
                    </div>
                </Modal>
            )}
        </main>
    );
}
