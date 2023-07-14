import React, { useEffect, useState } from 'react';
import { IoThunderstormOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import InfoWeather from './InfoWeather';
import ExchangeRate from './ExchangeRate';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import format from 'date-fns/format';

export default function InfoCity() {
    const [startDate, setStartDate] = useState<null | Date>(null);
    const [endDate, setEndDate] = useState<null | Date>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const temperatures = [
        ['16º', '1º', '1~3월'],
        ['16º', '1º', '4~6월'],
        ['16º', '1º', '7~9월'],
        ['16º', '1º', '10~12월']
    ];
    const activeColor = () => {
        let outsideMonth: any = document.getElementsByClassName(
            'react-datepicker__day--outside-month'
        );
        Object.values(outsideMonth).map((day: any) => {
            day.style.color = '#A3A3A3';
        });
    };
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
                className='flex items-center justify-between px-5 h-16 w-80 text-grey border border-lightgrey rounded-l hover:cursor-pointer'
            >
                {value === null ? title : format(value, 'yyyy-MM-dd')}
                <AiOutlineCalendar size={24} />
            </div>
        );
    };
    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    useEffect(() => {
        endDate === null ? setIsOpen(isOpen) : setIsOpen(!isOpen);
    }, [endDate]);
    useEffect(() => {
        activeColor();
    }, []);
    const date = new Date();
    return (
        <div className='flex justify-between mt-32'>
            <img src='/images/location.png' alt='none' />
            <div className='h-11/12  flex flex-col justify-between'>
                <div className='text-5xl font-bold  '>도쿄</div>
                {/* 날씨 부분 */}
                <div>
                    <span className='text-2xl'>날씨</span>
                    <div className='flex'>
                        <div className='w-20 h-32 mt-3 border border-grey rounded flex flex-col items-center'>
                            <span className='text-xs text-grey my-3'>
                                현지 기온
                            </span>
                            <IoThunderstormOutline size={40} />
                            <span className='my-3 text-lg'>16º</span>
                        </div>
                        <div className=' h-32 mt-3 border border-grey rounded flex flex-col items-center ml-5'>
                            <span className='text-xs text-grey my-3'>
                                월별 현지/대한민국 기온
                            </span>
                            <InfoWeather temperatures={temperatures} />
                        </div>
                    </div>
                </div>
                {/* 환율 계산 부분 */}
                <div className=''>
                    <span className='text-2xl'>환율 계산기</span>
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
                            className='w-auto  bg-black text-white rounded-r px-4'
                        >
                            로그인하기
                        </button>
                    </div>
                </div>
                <div
                    className={
                        isOpen
                            ? 'block absolute mt-[522px] ml-[80px] z-10'
                            : 'hidden'
                    }
                >
                    <DatePicker
                        dateFormatCalendar='yyyy년 MM월'
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                        locale={ko}
                        onMonthChange={activeColor}
                        renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled
                        }: any) => (
                            <div className='flex justify-between px-5 py-3 text-base'>
                                <div className='font-bold'>
                                    {date.getFullYear()}년 {date.getMonth() + 1}
                                    월
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        onClick={decreaseMonth}
                                        disabled={prevMonthButtonDisabled}
                                    >
                                        <img
                                            className='rotate-180'
                                            src='/images/calendararrow.png'
                                        />
                                    </button>
                                    <button
                                        type='button'
                                        onClick={increaseMonth}
                                        className='ml-6'
                                        disabled={nextMonthButtonDisabled}
                                    >
                                        <img src='/images/calendararrow.png' />
                                    </button>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
