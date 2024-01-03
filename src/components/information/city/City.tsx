import React, { useState } from 'react';
import Weather from './Weather';
import ExchangeRate from './ExchangeRate';
import Calendar from './Calendar';
import Image from 'next/image';
import LoginModal from '../../modal/LoginModal';
import { useRouter } from 'next/navigation';
import SelectDates from './SelectDates';
import register from '@/utils/register';
import { ICityInformationProps } from '@/types/city';
import useCreateSchedule from '@/hooks/createSchedule';

export default function City({
    city,
    currencyType,
    currency
}: ICityInformationProps) {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isUser = localStorage.getItem('uid') === null ? false : true;
    const [modal, setModal] = useState<boolean>(false);
    const { createSchedule } = useCreateSchedule();

    const loginOrCreate = () => {
        isUser
            ? createSchedule({
                  startDate,
                  endDate,
                  city
              })
            : setModal(true);
    };

    return (
        <div className='flex justify-between pt-28 pb-16'>
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
                <ExchangeRate
                    currencyKo={currencyType && currencyType.currencyKo}
                    currencyEn={currencyType && currencyType.currencyEn}
                    country={city.country}
                    currency={currency}
                    isUser={isUser}
                />
                {/* 날짜 선택 부분 */}
                <div>
                    <span className='text-2xl'>여행계획을 시작해볼까요?</span>
                    <div className='flex mt-3'>
                        <SelectDates
                            title='출발일'
                            value={startDate}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <SelectDates
                            title='도착일'
                            value={endDate}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <button
                            type='button'
                            onClick={loginOrCreate}
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
