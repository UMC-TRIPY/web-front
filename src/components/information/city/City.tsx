import React, { useState } from 'react';
import Weather from './Weather';
import ExchangeRate from './ExchangeRate';
import Calendar from './Calendar';
import Image from 'next/image';
import { ICityInformationProps } from '@/types/city';
import MakeTripDates from './MakeTripDates';

export default function City({
    city,
    currencyType,
    currency
}: ICityInformationProps) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isUser = localStorage.getItem('uid') === null ? false : true;

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
                <Weather cityName={city.cityEn} />
                {/* 환율 계산 부분 */}
                <ExchangeRate
                    currencyKo={currencyType && currencyType.currencyKo}
                    currencyEn={currencyType && currencyType.currencyEn}
                    country={city.country}
                    currency={currency}
                    isUser={isUser}
                />
                {/* 날짜 선택 부분 */}
                <MakeTripDates
                    startDate={startDate}
                    endDate={endDate}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    city={city}
                />
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
