import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SelectCityModal from '../modal/SelectCityModal';

interface Props {
    top: string;
    continentLeft: string;
    countryLeft: string;
    cityLeft: string;
}

export default function SearchCountries({
    top,
    continentLeft,
    countryLeft,
    cityLeft
}: Props) {
    const router = useRouter();

    const [isAbroad, setIsAbroad] = useState<boolean>(true);
    const [continent, setContinent] = useState<string>('대륙');
    const [country, setCountry] = useState<string>('국가');
    const [city, setCity] = useState<string>('도시');

    const [isContinent, setIsContinent] = useState<boolean>(false);
    const [isCountry, setIsCountry] = useState<boolean>(false);
    const [isCity, setIsCity] = useState<boolean>(false);

    const continentList: string[] = ['아시아', '유럽', '오세아니아'];
    const [countryList, setCountryList] = useState<string[]>([]);
    const [cityList, setCityList] = useState<string[]>([]);

    const datas = require('../../../public/data/dummy.json');
    const travels = datas.travels;

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
        <>
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
                    top={top}
                    left={continentLeft}
                    setModalState={setIsContinent}
                    setList={setContinent}
                    setNext={setCountryList}
                />
            )}
            {isCountry && (
                <SelectCityModal
                    lists={countryList}
                    top={top}
                    left={countryLeft}
                    setModalState={setIsCountry}
                    setList={setCountry}
                    setNext={setCityList}
                />
            )}
            {isCity && (
                <SelectCityModal
                    lists={cityList}
                    top={top}
                    left={cityLeft}
                    setModalState={setIsCity}
                    setList={setCity}
                    setNext={() => {}}
                />
            )}
        </>
    );
}
