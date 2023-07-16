'use client';

import react, { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/modal/Modal';
import { BiSearch } from 'react-icons/bi';
import RecoPrep from '@/components/recoprep/RecoPrep';
import Community from '@/components/community/Community';
import CardCarousel from '@/components/main/CardCarousel';

import GoogleLoginButton from '@/components/button/GoogleLoginButton';
import KakaoLoginButton from '@/components/button/KakaoLoginButton';

import ILocation from '@/models/interface/Ilocation';
import { FiThumbsUp, FiEye } from 'react-icons/fi';

const dummyItem = <div>abc</div>;

const dummyLocation: ILocation[] = [
    {
        title: '런던',
        desc: '000개의 리뷰',
        img: ''
    },
    {
        title: '도쿄',
        desc: '000개의 리뷰',
        img: '/images/tokyo.png'
    },
    {
        title: '파리',
        desc: '000개의 리뷰',
        img: '/images/paris.png'
    },
    {
        title: '뉴욕',
        desc: '000개의 리뷰',
        img: 'https://static01.nyt.com/images/2022/09/29/travel/36hours-nyc11/36hours-nyc11-mobileMasterAt3x-v2.jpg'
    },
    {
        title: '방콕',
        desc: '000개의 리뷰',
        img: ''
    },
    {
        title: '타이페이',
        desc: '000개의 리뷰',
        img: ''
    }
];

const dummyCommunity = [
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    },
    {
        location: '나라이름',
        title: '제목제목제목제목제목제목제목',
        thumbs: 9999,
        view: 9999
    }
];

export default function Home() {
    const [modal, setModal] = useState(false);
    const [isAbroad, setIsAbroad] = useState<boolean>(true);

    return (
        <main className='flex min-h-screen flex-col p-5'>
            <div className='my-5 text-center'>
                <span className='text-3xl font-bold'>
                    어디로 가고 싶으신가요?
                </span>
            </div>
            <div className='flex w-full my-3 justify-center items-center'>
                <input
                    className='basis-1/2 h-14 py-3.5 pl-6 border-b border-gray-300 outline-none'
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
                    className='hover:cursor-pointer'
                />
            </div>
            <div className='my-5'>
                <div className='flex flex-row my-3'>
                    <div className='flex flex-col justify-end items-center'>
                        {isAbroad && (
                            <Image
                                className='block'
                                src='/images/selected.png'
                                alt='none'
                                width={15}
                                height={15}
                            />
                        )}
                        <button
                            className={
                                isAbroad
                                    ? 'text-primary mx-4 font-bold'
                                    : 'text-infomenu mx-4 font-bold'
                            }
                            onClick={() => {
                                setIsAbroad(true);
                            }}
                        >
                            해외
                        </button>
                    </div>
                    <div className='flex flex-col justify-end items-center'>
                        {!isAbroad && (
                            <Image
                                className='block'
                                src='/images/selected.png'
                                alt='none'
                                width={15}
                                height={15}
                            />
                        )}
                        <button
                            className={
                                isAbroad
                                    ? 'text-infomenu mx-4 font-bold'
                                    : 'text-primary mx-4 font-bold'
                            }
                            onClick={() => {
                                setIsAbroad(false);
                            }}
                        >
                            국내
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <input
                        className='flex basis-1/3 py-3.5 pl-6 mx-1 border border-gray-300 rounded-md outline-none'
                        type='text'
                        placeholder='대륙'
                        value={''}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                    />
                    <input
                        className='flex basis-1/3 py-3.5 pl-6 mx-1 border border-gray-300 rounded-md'
                        type='text'
                        placeholder='국가'
                        value={''}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                    />
                    <input
                        className='flex basis-1/3 py-3.5 pl-6 mx-1 border border-gray-300 rounded-md'
                        type='text'
                        placeholder='도시'
                        value={''}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {}}
                    />
                    <button className='flex basis-1/12 justify-center items-center rounded-md bg-yellow-300'>
                        검색
                    </button>
                </div>
                <div className='flex flex-col my-20 p-12 bg-gray-50'>
                    <span className='text-xl'>트리피와 함께</span>
                    <span className='text-2xl font-bold'>여행일정 만들기</span>
                    <button className='w-20 my-3 border border-gray-500 rounded-lg'>
                        <span className='text-xs'>바로가기</span>
                    </button>
                    <Image
                        src='/images/carrier.svg'
                        className='absolute left-3/4'
                        alt=''
                        width={300}
                        height={300}
                    />
                </div>
                <div className='w-full my-44'>
                    <CardCarousel
                        title='인기 여행지'
                        size={4}
                        items={dummyLocation}
                    />
                </div>
                <div className='w-full my-44'>
                    <span className='font-bold text-2xl'>커뮤니티 인기글</span>
                    <table className='w-full h-full my-5'>
                        <tbody className='flex flex-col'>
                            <tr className='flex basis-full mb-2'>
                                <td className='basis-[10%]'>
                                    <button className='w-full border border-gray-300 rounded-md'>
                                        <span className=' text-gray-400'>
                                            나라이름
                                        </span>
                                    </button>
                                </td>
                                <td className='basis-8/12 ml-10'>
                                    제목제목제목제목
                                </td>
                                <td className='flex basis-1/12 justify-around items-center text-gray-400'>
                                    <FiThumbsUp size={20} />
                                    <span className=''>9,999</span>
                                </td>
                                <td className='flex basis-1/12 justify-around items-center text-gray-400'>
                                    <FiEye size={20} />
                                    <span className=''>9,999</span>
                                </td>
                            </tr>
                            {dummyCommunity.map((item, index) => (
                                <tr
                                    key={index}
                                    className='flex basis-full mb-2'
                                >
                                    <td className='basis-[10%]'>
                                        <button className='w-full border border-gray-300 rounded-md'>
                                            <span className=' text-gray-400'>
                                                {item.location}
                                            </span>
                                        </button>
                                    </td>
                                    <td className='basis-8/12 ml-10'>
                                        {item.title}
                                    </td>
                                    {/* 좋아요, 조회수 숫자 쉼표 캐스팅 고민해보아야함. */}
                                    <td className='flex basis-1/12 justify-around items-center text-gray-400'>
                                        <FiThumbsUp size={20} />
                                        <span className=''>{item.thumbs}</span>
                                    </td>
                                    <td className='flex basis-1/12 justify-around items-center text-gray-400'>
                                        <FiEye size={20} />
                                        <span className=''>{item.view}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                        <KakaoLoginButton />
                        <GoogleLoginButton />
                    </div>
                </Modal>
            )} */}
        </main>
    );
}
