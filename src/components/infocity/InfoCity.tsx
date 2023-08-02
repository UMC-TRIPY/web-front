import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import InfoWeather from './InfoWeather';
import ExchangeRate from './ExchangeRate';
import format from 'date-fns/format';
import Calendar from './Calendar';
import Image from 'next/image';

export default function InfoCity() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isUser, setIsUser] = useState<boolean>(false);
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
                {value === null ? title : format(value, 'yyyy-MM-dd')}
                <AiOutlineCalendar size={24} />
            </div>
        );
    };
    return (
        <div className='flex justify-between mt-28'>
            <Image
                src='/images/location.png'
                alt='none'
                width={522}
                height={522}
            />
            <div className='h-11/12  flex flex-col justify-between'>
                <div className='text-5xl font-bold  '>도쿄</div>
                {/* 날씨 부분 */}
                <div>
                    <span className='text-2xl'>날씨</span>
                    <InfoWeather />
                </div>
                {/* 환율 계산 부분 */}
                <div className=''>
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
                    <ExchangeRate />
                </div>
                {/* 날짜 선택 부분 */}
                <div className=''>
                    <span className='text-2xl'>여행계획을 시작해볼까요?</span>
                    <div className='flex mt-3'>
                        <SelectDates title='출발일' value={startDate} />
                        <SelectDates title='도착일' value={endDate} />
                        <button
                            type='button'
                            onClick={() => setIsUser(!isUser)}
                            className={
                                isUser
                                    ? 'w-2/12  bg-primary rounded-r px-4'
                                    : 'w-2/12  bg-black text-white rounded-r px-4'
                            }
                        >
                            {isUser ? '등록하기' : '로그인하기'}
                        </button>
                    </div>
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
