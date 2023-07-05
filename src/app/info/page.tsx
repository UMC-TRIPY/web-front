'use client';

import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { IoThunderstormOutline } from 'react-icons/io5';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { AiOutlineCalendar } from 'react-icons/ai';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

export default function Page() {
    const [before, setBefore] = useState<string>('');
    const [after, setAfter] = useState<string>(before);
    const [isWon, setIsWon] = useState<boolean>(true);
    const [date, setDate] = useState<any>(new Date());
    const onChange = (e: any) => {
        console.log(e);
        setDate(e);
    };
    console.log(typeof new Date().getDate());
    return (
        <div>
            {/* 화면 위치 및 검색 기능 부분 */}
            <div className='flex justify-between'>
                {/* 현재 위치에 따라 글자색, 위에 이미지 표시하는거 생각해보기 */}
                <div className='flex items-end'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src='/images/selected.png'
                            width={16}
                            height={16}
                            alt='none'
                            // className='hidden'
                        />
                        <span className='text-primary mx-4 font-bold'>
                            메인
                        </span>
                    </div>
                    <div className='text-infomenu mx-4 font-bold'>명소</div>
                    <div className='text-infomenu mx-4 font-bold'>준비물</div>
                    <div className='text-infomenu mx-4 font-bold'>후기</div>
                    <div className='text-infomenu mx-4 font-bold'>회화</div>
                </div>
                <div className='flex flex-col justify-center'>
                    <input
                        className='border border-grey w-96 h-14 rounded-lg py-3.5 pl-6'
                        type='text'
                        placeholder='보고 싶은 여행지를 입력하세요'
                    />
                    <BiSearch size='24' className='absolute self-end mr-5' />
                </div>
            </div>
            {/* 여행 도시 관한 정보 부분 */}
            <div className='flex justify-between mt-32'>
                <img src='/images/location.png' alt='none' />
                <div className='h-11/12  flex flex-col justify-between'>
                    <div className='text-5xl font-bold  '>도쿄</div>
                    {/* 날씨 부분 */}
                    <div className=''>
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
                                <div className='flex'>
                                    <div className='flex-col mx-12'>
                                        <span className='text-2xl'>
                                            16º/
                                            <span className='text-grey text-lg'>
                                                1º
                                            </span>
                                        </span>
                                        <div className='my-3 text-lg'>
                                            1~3월
                                        </div>
                                    </div>
                                    <div className='h-4/5 border-r border-grey' />
                                    <div className='flex-col mx-12'>
                                        <span className='text-2xl'>
                                            16º/
                                            <span className='text-grey text-lg'>
                                                1º
                                            </span>
                                        </span>
                                        <div className='my-3 text-lg'>
                                            4~6월
                                        </div>
                                    </div>
                                    <div className='h-4/5 border-r border-grey ' />
                                    <div className='flex-col mx-12'>
                                        <span className='text-2xl'>
                                            16º/
                                            <span className='text-grey text-lg'>
                                                1º
                                            </span>
                                        </span>
                                        <div className='my-3 text-lg'>
                                            7~9월
                                        </div>
                                    </div>
                                    <div className='h-4/5 border-r border-grey' />
                                    <div className='flex-col mx-12'>
                                        <span className='text-2xl'>
                                            16º/
                                            <span className='text-grey text-lg'>
                                                1º
                                            </span>
                                        </span>
                                        <div className='my-3 text-lg'>
                                            10~12월
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 환율 계산 부분 */}
                    <div className=''>
                        <span className='text-2xl'>환율 계산기</span>
                        <div className='flex justify-between items-center mt-3'>
                            {/* 환율 api 연동 해야합니다, input에 숫자만 입력하는 방법 찾아보는 중 입니다*/}
                            {isWon ? (
                                <>
                                    <div className='flex'>
                                        <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                                            <div>대한민국</div>
                                            <div>KRW</div>
                                        </div>
                                        <input
                                            className='flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'
                                            type='text'
                                            placeholder='숫자를 입력해주세요.'
                                            value={before}
                                            onChange={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) => {
                                                setBefore(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <LiaExchangeAltSolid
                                        size={28}
                                        onClick={() => {
                                            setIsWon(!isWon);
                                            setBefore('');
                                            setAfter('');
                                        }}
                                    />
                                    <div className='flex'>
                                        <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                                            <div>일본</div>
                                            <div>JPY</div>
                                        </div>
                                        <div className='flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'>
                                            {after}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex'>
                                        <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                                            <div>일본</div>
                                            <div>JPY</div>
                                        </div>
                                        <input
                                            className='flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'
                                            type='text'
                                            placeholder='숫자를 입력해주세요.'
                                            value={before}
                                            onChange={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) => {
                                                setBefore(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <LiaExchangeAltSolid
                                        size={28}
                                        onClick={() => {
                                            setIsWon(!isWon);
                                            setBefore('');
                                            setAfter('');
                                        }}
                                    />
                                    <div className='flex'>
                                        <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                                            <div>대한민국</div>
                                            <div>KRW</div>
                                        </div>
                                        <div className='flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'>
                                            {after}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {/* 날짜 선택 부분 */}
                    <div className=''>
                        <span className='text-2xl'>
                            여행계획을 시작해볼까요?
                        </span>
                        <div className='flex mt-3'>
                            <div className='flex items-center justify-between px-5 h-16 w-80 text-grey border border-lightgrey rounded-l'>
                                출발일
                                <AiOutlineCalendar size={24} />
                            </div>
                            <div className='flex items-center justify-between px-5 h-16 w-80 text-grey border border-lightgrey'>
                                도착일
                                <AiOutlineCalendar size={24} />
                            </div>
                            <button
                                type='button'
                                className='w-auto  bg-black text-white rounded-r px-4'
                            >
                                로그인하기
                            </button>
                        </div>
                    </div>
                    {/* <Calendar
                        className='absolute'
                        calendarType='US'
                        onChange={onChange}
                        value={date}
                    /> */}
                </div>
            </div>
        </div>
    );
}
