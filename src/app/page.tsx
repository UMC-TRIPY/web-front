'use client';

import react, { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/modal/Modal';
import { BiSearch } from 'react-icons/bi';
import RecoPrep from '@/components/recoprep/RecoPrep';
import Community from '@/components/community/Community';

export default function Home() {
    const [modal, setModal] = useState(false);

    return (
        <main className='flex min-h-screen flex-col items-center p-5'>
            <div>
                <span className='text-xl font-bold'>
                    어디로 가고 싶으신가요?
                </span>
            </div>
            <div className='flex flex-col my-3 justify-center'>
                <input
                    className='w-96 h-14 py-3.5 pl-6 border-b border-grey'
                    type='text'
                    placeholder='보고 싶은 여행지를 입력하세요'
                    value={''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
                />
                <BiSearch
                    // onClick={() =>
                    //     place === ''
                    //         ? alert('1글자 이상 입력해주세요.')
                    //         : alert(`${place} 검색 중...`)
                    // }
                    size='24'
                    className='absolute self-end mr-5 hover:cursor-pointer'
                />
            </div>
            <div>
                <div className='flex flex-row'>
                    <button>해외</button>
                    <button>국내</button>
                </div>
                <div className='flex justify-between'>
                    <input
                        className='flex-1 py-3.5 pl-6 mx-1 border border-grey-300 rounded-md'
                        type='text'
                        placeholder='대륙'
                        value={''}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                    />
                    <input
                        className='flex-1 py-3.5 pl-6 mx-1 border border-grey-300 rounded-md'
                        type='text'
                        placeholder='국가'
                        value={''}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                    />
                    <input
                        className='flex-1 py-3.5 pl-6 mx-1 border border-grey-300 rounded-md'
                        type='text'
                        placeholder='도시'
                        value={''}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                    />
                    <button className='flex-1 py-3.5 pl-6 mx-1 rounded-md bg-yellow-300'>
                        검색
                    </button>
                </div>
                <div className='flex flex-col my-20 p-10 bg-[#E0E0E0]'>
                    <span className='text-xl'>트리피와 함께</span>
                    <span className='text-2xl font-bold'>여행일정 만들기</span>
                    <button className='w-20 my-3 border border-gray-500 rounded-lg'>
                        <span className='text-xs'>바로가기</span>
                    </button>
                    <Image
                        src='/images/carrier.svg'
                        className='absolute top-[65%] right-[15%]'
                        alt=''
                        width={300}
                        height={300}
                    />
                </div>
                <RecoPrep />
                <Community />
                <div className='flex flex-col my-20 p-10 bg-[#E0E0E0]'>
                    <span className='text-2xl font-bold'>프로모션 제목</span>
                    <span className='text-xl'>프로모션 부가설명</span>
                </div>
            </div>

            {/* <button onClick={() => setModal(true)}>모달 예시 버튼</button>
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
                    </div>
                </Modal>
            )} */}
        </main>
    );
}
