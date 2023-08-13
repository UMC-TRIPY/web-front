'use client';
import SignUpDoneModal from '@/components/modal/SignUpDoneModal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
    const [email, setEmail] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);
    const router = useRouter();

    const onClick = () => {
        setIsModal(true);
    };

    return (
        <div className='flex flex-col h-full mt-40'>
            <div className='text-3xl font-bold mb-12'>회원가입하기</div>
            <div className='text-xl mb-7'>이메일</div>
            <input
                type='text'
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
                placeholder='이메일을 입력해주세요'
                className='border border-lightgrey rounded px-4 py-[14px] mb-9 outline-none'
            />
            <div className='text-xl mb-7'>닉네임</div>
            <input
                type='text'
                value={nickname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNickname(e.target.value)
                }
                placeholder='닉네임을 입력해주세요'
                className={`border rounded px-4 py-[14px] mb-3 outline-none ${
                    !nickname ? 'border-lightgrey' : 'border-approve'
                } `}
            />
            <div
                className={`text-xs text-approve mb-3 ${
                    !nickname ? 'hidden' : ''
                }`}
            >
                사용 가능한 닉네임입니다.
            </div>
            <div className='text-xs text-warning'>
                ※ 회원가입 시 설정한 닉네임은 수정할 수 없습니다.
            </div>
            <button
                className='bg-primary py-3 w-1/12 self-center rounded mt-40'
                onClick={onClick}
            >
                가입완료
            </button>
            {isModal && (
                <SignUpDoneModal
                    setModalState={setIsModal}
                    onClickCompleteButton={() => {
                        setIsModal(false);
                        router.push('/');
                    }}
                    completeText='확인'
                >
                    <div className='flex flex-col items-center justify-between text-center h-full py-9 text-xl'>
                        <Image
                            src='/images/logo1.svg'
                            alt='none'
                            width={350}
                            height={75}
                        />
                        <div>
                            회원가입이 완료되었습니다.
                            <br />
                            <span className='text-primary font-bold'>
                                트리피
                            </span>
                            와 함께 여행을 시작해볼까요?
                        </div>
                    </div>
                </SignUpDoneModal>
            )}
        </div>
    );
}
