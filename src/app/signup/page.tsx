'use client';
import { getMyInformation } from '@/apis/user/friend';
import { completeSignup } from '@/apis/user/login';
import SignUpDoneModal from '@/components/modal/SignUpDoneModal';
import { emailState, isLoggedInState } from '@/states/user';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export default function Page() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [nicknameInput, setNicknameInput] = useState<string>('');
    const router = useRouter();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);

    const [userData, setUserData] = useState({
        email: '로딩중...',
        nickname: '로딩중...',
        nationality: '한국',
        profileImg: ''
    });

    const onClick = () => {
        setIsModal(true);
        completeSignup(nicknameInput).then((res) => {
            console.log('complete:', res);
            if (res.success) setIsLoggedIn(true);
            else {
                alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
                router.push('/');
            }
        });
    };

    useEffect(() => {
        getMyInformation().then((data) => {
            setUserData(data);
        });
    }, []);
    return (
        <div className='flex flex-col h-full mt-40'>
            <div className='text-3xl font-bold mb-12'>회원가입하기</div>
            <div className='text-xl mb-7'>이메일</div>
            <div className='border-2 p-3 my-4 text-grey'>{userData.email}</div>
            <div className='text-xl mb-7'>닉네임</div>
            <input
                type='text'
                value={nicknameInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNicknameInput(e.target.value)
                }
                placeholder='닉네임을 입력해주세요'
                className={`border rounded px-4 py-[14px] mb-3 outline-none ${
                    !nicknameInput ? 'border-lightgrey' : 'border-approve'
                } `}
            />
            <div
                className={`text-xs text-approve mb-3 ${
                    !nicknameInput ? 'hidden' : ''
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
                <SignUpDoneModal>
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
