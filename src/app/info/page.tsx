'use client';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import SearchModal from '@/components/modal/SearchCityModal';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';

function City() {
    const searchedCities = [
        // 최근 검색어
        '부산',
        '홍콩',
        '도쿄'
    ];
    const onClick = (searchedCity: string) => {
        alert(`${searchedCity} 삭제 완료!`);
    };

    return (
        <div className='flex'>
            {searchedCities.map((searchedCity, index) => {
                return (
                    <div
                        className='border border-grey rounded-full mr-2'
                        key={index}
                    >
                        <div className='flex px-3 py-2 text-[12px]'>
                            {searchedCities[index]}
                            <button
                                className='pl-2 pb-0.5' // RxCross가 중앙에 위치하기 위해 pb-0.5
                                onClick={() => onClick(searchedCity)}
                            >
                                <RxCross1 size={12} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const Page = () => {
    const [isAbroad, setIsAbroad] = useState<boolean>(true);
    const [place, setPlace] = useState<string>('');
    const [modal, setIsModal] = useState<boolean>(false);
    const router = useRouter();
    const cities = ['런던', '제주도', '대만', '도쿄', '하와이'];
    const datas = require('../../../public/data/dummy.json');
    const travels = datas.travels;
    const results = travels
        .filter((t: any) => t[0][0].includes(place[0]))
        .filter((t: any) => t[0].includes(place.replace(/ /g, '')));
    const onClick = (city: string) => {
        const move = travels.filter(
            (travel: [string, string]) => travel[0] === city
        )[0][1];
        router.push(`/info/${move}`);
    };
    return (
        <div className='flex flex-col py-20'>
            <div className='mb-11 text-center text-5xl font-bold'>
                어디로 가고 싶으신가요?
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
            {modal && (
                <SearchModal setModalState={setIsModal} results={results} />
            )}
            <div className='flex self-center w-1/2 items-center mb-16'>
                <span className='mr-2'>최근 검색어</span>
                <div className='mx-2'>
                    <City /> {/* 최근 검색어 map으로 출력 */}
                </div>
            </div>
            <div className='mt-2 mb-4'>
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
            </div>
            <div className='flex flex-col bg-brightgrey rounded-md px-8 py-2.5'>
                <div className='py-2.5'>인기 검색어</div>
                <div className='flex flex-col'>
                    {cities.map((city, index) => (
                        <div key={index} className='flex items-start py-2.5'>
                            <span className='text-grey mr-4'>{index + 1}</span>
                            <button onClick={() => onClick(city)}>
                                {city}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
