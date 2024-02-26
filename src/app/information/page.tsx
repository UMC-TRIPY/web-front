'use client';

import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import SearchCountries from '@/components/main/SearchCountries';
import Title from '@/components/common/Title';
import SearchCityIcon from '@/components/common/SearchCityIcon';
import UnderlineSearchInput from '@/components/common/UnderlineSearchInput';
import { IRecentSearchCityProps } from '@/types/city';

const Page = () => {
    const [place, setPlace] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const router = useRouter();
    const [recentSearchCities, setRecentSearchCities] = useState<
        IRecentSearchCityProps[]
    >([
        { name: '부산', route: 'busan' },
        { name: '홍콩', route: 'hong-kong' },
        { name: '도쿄', route: 'tokyo' }
    ]);
    const popularKeyword = ['런던', '제주도', '대만', '도쿄', '하와이'];
    const datas = require('../../../public/data/dummy.json');
    const travels = datas.travels;

    const handleGoToCity = (city: string) => {
        const searchResult = travels.filter(
            (travel: [string, string]) => travel[0] === city
        )[0][1];
        router.push(`/information/${searchResult}`);
    };

    const handleDelete = (e: React.MouseEvent, name: string) => {
        e.stopPropagation();
        setRecentSearchCities(
            recentSearchCities.filter((city) => city.name !== name)
        );
    };
    const handleRoute = (name: string) => router.push(`/information/${name}`);

    return (
        <div className='flex flex-col py-16'>
            <Title />
            <div className='flex items-center flex-row-reverse self-center w-1/2 mb-6'>
                <UnderlineSearchInput
                    place={place}
                    setPlace={setPlace}
                    setModalOpen={setModalOpen}
                />
                <SearchCityIcon
                    place={place}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            </div>
            <div className='flex w-1/2 items-center mx-auto mb-16 gap-x-5'>
                <span>최근 검색어</span>
                <div className='mx-2 flex gap-x-2'>
                    {recentSearchCities.map((city) => (
                        <button
                            className='flex border border-grey rounded-full py-2 px-3 gap-x-2 items-center text-darkgrey'
                            onClick={() => handleRoute(city.name)}
                            key={`${city.name}-route-button`}
                        >
                            <span key={city.name}>{city.name}</span>
                            <RxCross1
                                size={16}
                                onClick={(e) => handleDelete(e, city.name)}
                                key={`${city.name}-delete-button`}
                            />
                        </button>
                    ))}
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
