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
    const router = useRouter();

    const [isAbroad, setIsAbroad] = useState<boolean>(true);
    const [place, setPlace] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);
    const [continent, setContinent] = useState<string>('대륙');
    const [country, setCountry] = useState<string>('국가');
    const [city, setCity] = useState<string>('도시');

    const [isContinent, setIsContinent] = useState<boolean>(false);
    const [isCountry, setIsCountry] = useState<boolean>(false);
    const [isCity, setIsCity] = useState<boolean>(false);

    const [continentList, setContinentList] = useState<string[]>([
        '아시아',
        '유럽',
        '오세아니아'
    ]);
    const [countryList, setCountryList] = useState<string[]>([]);
    const [cityList, setCityList] = useState<string[]>([]);

    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const datas = require('../../public/data/dummy.json');
    const travels = datas.travels;
    const results = travels
        .filter((t: any) => t[0][0].includes(place[0]))
        .filter((t: any) => t[0].includes(place.replace(/ /g, '')));

    const selectContinent = () => {
        setIsContinent(true);
        setIsCountry(false);
        setIsCity(false);
        setCountry('국가');
        setCity('도시');
        setCityList([]);
    };
    const selectCountry = () => {
        setIsContinent(false);
        setIsCountry(true);
        setIsCity(false);
        setCity('도시');
    };
    const selectCity = () => {
        setIsContinent(false);
        setIsCountry(false);
        setIsCity(true);
    };
    const onSearch = () => {
        if (city === '도시') {
            alert('도시를 선택해주세요.');
            return;
        }
        const href = travels.filter((t: any) => t.includes(city))[0][1];
        router.push(`/info/${href}`);
    };
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
                                setContinent('대륙');
                                setCountry('국가');
                                setCity('도시');
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
                                setContinent('아시아');
                                setCountry('대한민국');
                                setCity('도시');
                                setIsAbroad(false);
                            }}
                        >
                            국내
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button
                        className='flex min-w-[368px] py-3.5 pl-6 mx-1 border border-gray-300 rounded-md text-grey'
                        onClick={selectContinent}
                    >
                        {continent}
                    </button>
                    <button
                        className='flex min-w-[368px] py-3.5 pl-6 mx-1 border border-gray-300 rounded-md text-grey'
                        onClick={selectCountry}
                    >
                        {country}
                    </button>
                    <button
                        className='flex min-w-[368px] py-3.5 pl-6 mx-1 border border-gray-300 rounded-md text-grey'
                        onClick={selectCity}
                    >
                        {city}
                    </button>
                    <button
                        className='flex min-w-[140px] justify-center items-center rounded-md bg-yellow-300'
                        onClick={onSearch}
                    >
                        검색
                    </button>
                </div>
                {isContinent && (
                    <SelectCityModal
                        lists={continentList}
                        top='top-[425px]'
                        left='left-[25px] '
                        setModalState={setIsContinent}
                        setList={setContinent}
                        setNext={setCountryList}
                    />
                )}
                {isCountry && (
                    <SelectCityModal
                        lists={countryList}
                        top='top-[425px]'
                        left='left-[400px]'
                        setModalState={setIsCountry}
                        setList={setCountry}
                        setNext={setCityList}
                    />
                )}
                {isCity && (
                    <SelectCityModal
                        lists={cityList}
                        top='top-[425px]'
                        left='left-[780px]'
                        setModalState={setIsCity}
                        setList={setCity}
                        setNext={() => {}}
                    />
                )}
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
                <div className='flex flex-col my-20 p-10 bg-[#E0E0E0]'>
                    <span className='text-2xl font-bold'>프로모션 제목</span>
                    <span className='text-xl'>프로모션 부가설명</span>
                </div>
            </div>
        </main>
    );
}
