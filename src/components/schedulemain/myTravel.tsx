import React, { useState, useEffect } from 'react';
import RoundBtn from '../layout/roundBtn';
import Pagination from '../maincommunity/Pagination';

interface Props {
    id: number;
    dates: string;
    places: string;
}

const contents = [
    { id: 1, dates: '2023.06.30~2023.07.02 (2박 3일)', places: '부산' },
    {
        id: 2,
        dates: '2023.05.09~2023.05.11 (2박 3일)',
        places: '바르셀로나, 세비야'
    },
    {
        id: 3,
        dates: '2023.05.09~2023.05.11 (2박 3일)',
        places: '파리, 런던'
    },
    {
        id: 4,
        dates: '2023.05.09~2023.05.11 (2박 3일)',
        places: '오사카, 나라, 교토'
    },
    { id: 5, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '방콕' },
    {
        id: 6,
        dates: '2023.05.09~2023.05.11 (2박 3일)',
        places: '싱가폴, 말레이시아'
    },
    { id: 7, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '제주도' },
    { id: 8, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '도쿄' },
    { id: 9, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '어디어디' },
    { id: 10, dates: '언제언제', places: '어디어디' },
    { id: 11, dates: '언제언제', places: '어디어디' },
    { id: 12, dates: '언제언제', places: '어디어디' },
    { id: 13, dates: '언제언제', places: '어디어디' }
];

function MyTravel() {
    const totalPages = Math.ceil(contents.length / 8);
    const [current, setCurrent] = useState<number>(1);
    const [datas, setDatas] = useState<Props[]>(contents.slice(0, 8));
    useEffect(() => {
        setDatas(contents.slice((current - 1) * 8, current * 8));
    }, [current]);
    return (
        <div className='mx-4 mt-16'>
            <div className='text-3xl font-bold mb-5'>내 여행 목록</div>
            <div className='rounded-md bg-brightgrey'>
                <div className='border-b border-b-lightgrey py-5'>
                    <div className='flex justify-between'>
                        <div className='w-1/3 text-center'>
                            <p>일정</p>
                        </div>
                        <div className='w-1/3 text-center'>
                            <p>장소</p>
                        </div>
                        <div className='w-1/3 text-center'>
                            <p>관리하기</p>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    {datas.map((data: Props) => (
                        <div
                            key={data.id}
                            className='flex items-center justify-between py-[16.5px]'
                        >
                            <div className='w-1/3 text-center'>
                                {data.dates}
                            </div>
                            <div className='w-1/3 text-center'>
                                {data.places}
                            </div>
                            <div className='flex w-1/3 justify-center'>
                                <RoundBtn
                                    label='상세보기'
                                    color='bg-lightgrey'
                                />
                                <RoundBtn
                                    label='수정하기'
                                    color='bg-lightgrey'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                totalPages={totalPages}
                current={current}
                setCurrent={setCurrent}
            />
        </div>
    );
}

export default MyTravel;
