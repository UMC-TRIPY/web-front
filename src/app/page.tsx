'use client';

import react, { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/modal/Modal';
import { BiSearch } from 'react-icons/bi';
import RecoPrep from '@/components/recoprep/RecoPrep';
import Community from '@/components/community/Community';
import CardCarousel from '@/components/main/CardCarousel';

import GoogleLoginButton from '@/components/button/GoogleLoginButton';
import KakaoLoginButton from '@/components/button/KakaoLoginButton';

import ILocation from '@/models/interface/ILocation';
import { FiThumbsUp, FiEye } from 'react-icons/fi';
import { useRouter, useSearchParams } from 'next/navigation';
import { getKakaoAccessToken } from '@/apis/user/login';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '@/states/user';
import MakeSchedule from '@/components/mypage/MakeSchedule';

import Link from 'next/link';
import SearchCityModal from '@/components/modal/SearchCityModal';
import SelectCityModal from '@/components/modal/SelectCityModal';
import Promotion from '@/components/maincommunity/Promotion';
import SearchCountries from '@/components/main/SearchCountries';

const dummyItem = <div>abc</div>;

const dummyLocation: ILocation[] = [
    {
        title: '런던',
        desc: '999개의 리뷰',
        img: '/images/londonPic.jpg'
    },
    {
        title: '도쿄',
        desc: '999개의 리뷰',
        img: '/images/tokyoPic.jpg'
    },
    {
        title: '바르셀로나',
        desc: '999개의 리뷰',
        img: '/images/barcelonaPic.jpg'
    },
    {
        title: '오사카',
        desc: '999개의 리뷰',
        img: '/images/osakaPicc.jpg'
    },
    {
        title: '시드니',
        desc: '999개의 리뷰',
        img: '/images/sydneyPic.jpg'
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
    const [place, setPlace] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);

    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const datas = require('../../public/data/dummy.json');
    const travels = datas.travels;
    const results = travels
        .filter((t: any) => t[0][0].includes(place[0]))
        .filter((t: any) => t[0].includes(place.replace(/ /g, '')));

    return (
        <main className='flex min-h-screen flex-col p-5'>
            <div className='my-5 text-center'>
                <span className='text-3xl font-bold'>
                    어디로 가고 싶으신가요?
                </span>
            </div>
            <div className='flex items-center flex-row-reverse self-center w-1/2 mb-6'>
                <input
                    className='h-14 w-full py-3.5 border-b border-gray-300 outline-none'
                    type='text'
                    placeholder='보고 싶은 여행지를 입력하세요'
                    value={place}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlace(e.target.value)
                    }
                    onClick={() => setIsModal(true)}
                />
                <Link
                    onClick={() => {
                        if (place === '') {
                            alert('1글자 이상 입력해주세요.');
                        }

                        if (results.length !== 1) {
                            alert('해당 여행지가 없습니다.');
                        }
                    }}
                    href={
                        place === ''
                            ? '/info'
                            : results.length === 1
                            ? `/info/${results.map(
                                  (result: [string, string]) => result[1]
                              )}`
                            : '/info'
                    }
                    className='hover:cursor-pointer absolute'
                >
                    <BiSearch size='24' />
                </Link>
            </div>
            {isModal && (
                <SearchCityModal
                    top='top-[260px]'
                    setModalState={setIsModal}
                    results={results}
                />
            )}
            <div className='my-5'>
                <SearchCountries
                    top='top-[425px]'
                    continentLeft='left-[25px]'
                    countryLeft='left-[400px]'
                    cityLeft='left-[780px]'
                />
                <MakeSchedule />
                <div className='w-full my-44'>
                    <CardCarousel
                        mode={0}
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
                <Promotion />
            </div>
        </main>
    );
}
