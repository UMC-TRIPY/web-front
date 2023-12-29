import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import Weather from './Weather';
import ExchangeRate from './ExchangeRate';
import format from 'date-fns/format';
import Calendar from './Calendar';
import Image from 'next/image';
import LoginModal from '../../modal/LoginModal';
import { useRouter } from 'next/navigation';
import differenceInDays from 'date-fns/differenceInDays';
import { updateLists } from '@/apis/travellists/update';

interface CityProps {
    country: string;
    cityKo: string;
    cityEn: string;
    mainPhoto: string;
}

interface CurrencyProps {
    currencyKo: string;
    currencyEn: string;
}

export default function City({
    city,
    currency,
    cur
}: {
    city: CityProps;
    currency: CurrencyProps | undefined;
    cur: number;
}) {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isUser = localStorage.getItem('uid') === null ? false : true;
    const [modal, setModal] = useState<boolean>(false);
    const SelectDates = ({
        title,
        value
    }: {
        title: null | string;
        value: null | Date;
    }) => {
        return (
            <div
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
                className='flex items-center justify-between px-5 h-16 w-5/12 text-grey border border-lightgrey rounded-l hover:cursor-pointer'
            >
                {value === null ? title : format(value, 'yyyy.MM.dd')}
                <AiOutlineCalendar size={24} />
            </div>
        );
    };
    const register = () => {
        if (startDate === null || endDate === null) return;
        const start: string = format(startDate, 'yyyy.MM.dd');
        const end: string = format(endDate, 'yyyy.MM.dd');
        const difference: number = differenceInDays(endDate, startDate) + 1;
        const dates: string = `${start} ~ ${end} (${
            difference - 1
        }박 ${difference}일)`;
        sessionStorage.setItem('date', dates);
        sessionStorage.setItem('place', city.cityKo);

        updateLists({
            cityname: city.cityKo,
            departureDate: format(startDate, 'yyyy-MM-dd'),
            arrivalDate: format(endDate, 'yyyy-MM-dd')
        });
    };
    const createSchedule = () => {
        if (startDate === null || endDate === null) {
            alert('날짜를 선택해주세요.');
            return;
        }
        register();
        router.push('/newschedule');
    };

    return (
        <div className='flex justify-between pt-28 pb-16' id='main'>
            <Image
                src={city.mainPhoto}
                alt='none'
                width={522}
                height={522}
                className='rounded-lg'
            />
            <div className='h-11/12  flex flex-col justify-between'>
                <div className='text-5xl font-bold'>{city.cityKo}</div>
                {/* 날씨 부분 */}
                <div>
                    <span className='text-2xl'>날씨</span>
                    <Weather cityName={city.cityEn} />
                </div>
                {/* 환율 계산 부분 */}
                <div>
                    <div className='flex text-xs items-center'>
                        <span className='text-2xl mr-4'>환율 계산기</span>
                        <button
                            className={
                                isUser
                                    ? 'bg-lightgrey py-1 px-3 rounded-2xl text-darkgrey'
                                    : 'hidden'
                            }
                        >
                            환율정보 저장하기
                        </button>
                    </div>
                    <ExchangeRate
                        currencyKo={
                            currency === undefined ? '' : currency.currencyKo
                        }
                        currencyEn={
                            currency === undefined ? '' : currency.currencyEn
                        }
                        country={city.country}
                        cur={cur}
                    />
                </div>
                {/* 날짜 선택 부분 */}
                <div>
                    <span className='text-2xl'>여행계획을 시작해볼까요?</span>
                    <div className='flex mt-3'>
                        <SelectDates title='출발일' value={startDate} />
                        <SelectDates title='도착일' value={endDate} />
                        <button
                            type='button'
                            onClick={() =>
                                !isUser ? setModal(true) : createSchedule()
                            }
                            className={
                                isUser
                                    ? 'w-2/12  bg-primary rounded-r px-4'
                                    : 'w-2/12  bg-black text-white rounded-r px-4'
                            }
                        >
                            {isUser ? '등록하기' : '로그인하기'}
                        </button>
                    </div>
                    {modal && (
                        <LoginModal
                            setIsModal={setModal}
                            setIsLogin={() => {}}
                            setIsSignUp={() => {}}
                            setIsLoggedIn={() => {}}
                            title={'로그인'}
                        />
                    )}
                </div>
                {/* Calendar 사용시 아래 7개 props 필수 */}
                <Calendar
                    startDate={startDate}
                    endDate={endDate}
                    isOpen={isOpen}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    setIsOpen={setIsOpen}
                    claName={
                        isOpen
                            ? 'block absolute mt-[522px] ml-[80px] z-10'
                            : 'hidden'
                    }
                />
            </div>
        </div>
    );
}
