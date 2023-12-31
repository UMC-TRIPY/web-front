'use client';

import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import SearchCountries from '@/components/main/SearchCountries';
import Title from '@/components/common/Title';
import SearchCityIcon from '@/components/common/SearchCityIcon';

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
    const [place, setPlace] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const router = useRouter();
    const popularKeyword = ['런던', '제주도', '대만', '도쿄', '하와이'];
    const datas = require('../../../public/data/dummy.json');
    const travels = datas.travels;

    const handleGoToCity = (city: string) => {
        const searchResult = travels.filter(
            (travel: [string, string]) => travel[0] === city
        )[0][1];
        router.push(`/information/${searchResult}`);
    };

    return (
        <div className='flex flex-col py-16'>
            <Title />
            <div className='flex items-center flex-row-reverse self-center w-1/2 mb-6'>
                <input
                    className='h-14 w-full py-3.5 border-b border-gray-300 outline-none'
                    type='text'
                    placeholder='보고 싶은 여행지를 입력하세요'
                    value={place}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlace(e.target.value)
                    }
                    onClick={() => setModalOpen(true)}
                />
                <SearchCityIcon
                    place={place}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            </div>
            <div className='flex self-center w-1/2 items-center mb-16'>
                <span className='mr-2'>최근 검색어</span>
                <div className='mx-2'>
                    <City /> {/* 최근 검색어 map으로 출력 */}
                </div>
            </div>
            <div className='mt-2 mb-4'>
                <SearchCountries
                    top='top-[590px]'
                    continentLeft='left-[5px]'
                    countryLeft='left-[385px]'
                    cityLeft='left-[765px]'
                />
            </div>
            <div className='flex flex-col bg-brightgrey rounded-md px-8 py-2.5'>
                <div className='py-2.5'>인기 검색어</div>
                <div className='flex flex-col'>
                    {popularKeyword.map((city, index) => (
                        <div key={index} className='flex items-start py-2.5'>
                            <span className='text-grey mr-4'>{index + 1}</span>
                            <button onClick={() => handleGoToCity(city)}>
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
