import Image from 'next/image';
import React from 'react';
import { TiWeatherStormy } from 'react-icons/ti';

const WeatherSection = () => {
    return (
        <div className='h-2/5 bg-brightgrey'>
            <div className='flex h-1/5 items-center text-2xl font-bold pl-8'>
                날씨
            </div>
            <div className='flex gap-8 h-1/5 justify-center items-center m-auto'>
                <div className='flex gap-2'>
                    <div>Day 1</div>
                    <div>6월 30일</div>
                </div>
                <div className='flex gap-2'>
                    <div>마커</div>
                    <div>부산, 해운대</div>
                    <div className='text-grey'>대한민국</div>
                </div>
            </div>
            <div className='flex h-3/5 justify-center items-center gap-12'>
                <TiWeatherStormy size={100} />
                <div className='flex flex-col gap-2'>
                    <div className='text-4xl'>16°</div>
                    <div className='flex gap-4'>
                        <div className='font-bold'>번개와 비구름</div>
                        <div>23°</div>
                        <div>12°</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const materials = [
    '비치웨어',
    '자외선 차단제',
    '양산',
    '슬리퍼',
    '여권',
    '선글라스',
    '미니 선풍기',
    '우산',
    '우비',
    '부채',
    '여행용 방수팩',
    '수영 모자',
    '모기약'
];

const MaterialSection = () => {
    return (
        <div className='h-2/6 bg-brightgrey'>
            <div className='flex items-center h-2/5 text-2xl font-bold pl-8'>
                여행지별 추천 준비물
            </div>
            <div className='flex flex-wrap gap-4 w-[90%] m-auto'>
                {materials.map((material, idx) => (
                    <div
                        key={idx}
                        className='flex justify-center items-center w-fit h-8 p-4 bg-lightgrey rounded-full'
                    >
                        {material}
                    </div>
                ))}
            </div>
        </div>
    );
};

const CarrierSection = () => {
    return (
        <>
            <div>
                <div className='flex justify-center'>
                    <Image
                        src='/images/carrierHandle.svg'
                        alt=''
                        width={250}
                        height={200}
                    />
                    <div className='absolute text-white text-2xl pt-1'>
                        캐리어
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex justify-between w-[38%]'>
                        <div className='w-8 h-12 bg-lightgrey'></div>
                        <div className='w-8 h-12 bg-lightgrey'></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 p-4 bg-brightgrey'>
                {materials.map((material, idx) => (
                    <div
                        key={idx}
                        className='flex justify-between items-center mx-4'
                    >
                        <div className='flex gap-4'>
                            <input
                                type='checkbox'
                                className='flex justify-center items-center w-6 h-6 rounded-full appearance-none border-2 bg-white checked:bg-main-color checked:after:content-["✓"] cursor-pointer'
                            ></input>
                            <div>{material}</div>
                            <div className='cursor-pointer'>X</div>
                        </div>
                        <div className='cursor-pointer'>↓</div>
                    </div>
                ))}
            </div>
        </>
    );
};

const MemoSection = () => {
    return (
        <div className='h-2/6 bg-brightgrey'>
            <div className='flex items-center h-1/5 text-2xl font-bold pl-8 py-8'>
                메모
            </div>
            <textarea
                className='w-full h-full pl-8 resize-none text-xl bg-brightgrey placeholder::text-grey outline-none'
                placeholder='메모를 입력하세요.'
            ></textarea>
        </div>
    );
};

const BagDetail = () => {
    return (
        <div className='h-screen'>
            <div className='flex items-center h-16 text-xl text-dark-black'>
                {'<'} 가방 목록 보기
            </div>

            <div className='flex gap-4 h-full'>
                <div className='flex flex-col gap-4 h-full w-1/2'>
                    <WeatherSection />
                    <MaterialSection />
                    <MemoSection />
                </div>
                <div className='w-1/2'>
                    <CarrierSection />
                </div>
            </div>
        </div>
    );
};

export default BagDetail;
