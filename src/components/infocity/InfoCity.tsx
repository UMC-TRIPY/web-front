import React from 'react';
import { IoThunderstormOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import InfoWeather from './InfoWeather';
import ExchangeRate from './ExchangeRate';

export default function InfoCity() {
    const temperatures = [
        ['16º', '1º', '1~3월'],
        ['16º', '1º', '4~6월'],
        ['16º', '1º', '7~9월'],
        ['16º', '1º', '10~12월']
    ];
    const SelectDates = ({ title }: { title: string }) => {
        return (
            <div className='flex items-center justify-between px-5 h-16 w-80 text-grey border border-lightgrey rounded-l'>
                {title}
                <AiOutlineCalendar size={24} />
            </div>
        );
    };
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
                        <SelectDates title='출발일' />
                        <SelectDates title='도착일' />
                        <button
                            type='button'
                            className='w-auto  bg-black text-white rounded-r px-4'
                        >
                            로그인하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
