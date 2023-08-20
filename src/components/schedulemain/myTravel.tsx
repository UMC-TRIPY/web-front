import React, { useState, useEffect } from 'react';
import RoundBtn from '../layout/roundBtn';
import Pagination from '../maincommunity/Pagination';
import { checkLists } from '@/apis/travellists/check';
import { differenceInDays, format } from 'date-fns';
import { useRouter } from 'next/navigation';

interface Props {
    id: number;
    dates: string;
    places: string;
}

interface MyTravelProps {
    status: 'page' | 'modal';
    checkedItems?: Array<number>;
    setCheckedItems?: (items: Array<number>) => void;
}

function MyTravel({ status, checkedItems, setCheckedItems }: MyTravelProps) {
    const [contents, setContents] = useState<any>([]);
    const router = useRouter();
    useEffect(() => {
        checkLists().then((res) => {
            let tmp: any[] = [];
            res.map((d: any, idx: number) => {
                const departureDate =
                    d.departureDate === '0000-00-00'
                        ? new Date()
                        : new Date(d.departureDate.slice(0, 10));
                const arrivalDate = new Date(d.arrivalDate.slice(0, 10));
                const difference = differenceInDays(arrivalDate, departureDate);
                tmp.push({
                    id: idx + 1,
                    dates: `${format(departureDate, 'yyyy.MM.dd')} ~ ${format(
                        arrivalDate,
                        'yyyy.MM.dd'
                    )} (${
                        difference === 0
                            ? '당일치기'
                            : `${difference}박 ${difference + 1}일`
                    })`,
                    places: d.city_name === null ? '미정' : d.city_name
                });
            });
            setContents(tmp);
            setDatas(tmp.slice(0, 8));
        });
    }, []);
    /** 모달창에서 체크된 일정들을 checkedItems에 담음 */
    const handleCheckChange = (id: number) => {
        if (status === 'modal' && checkedItems && setCheckedItems) {
            if (checkedItems.includes(id)) {
                setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
            } else {
                setCheckedItems([...checkedItems, id]);
            }
        } else return;
    };

    const totalPages = Math.ceil(contents.length / 8);
    const [current, setCurrent] = useState<number>(1);
    const [datas, setDatas] = useState<Props[]>(contents.slice(0, 8));
    useEffect(() => {
        setDatas(contents.slice((current - 1) * 8, current * 8));
    }, [current]);

    return (
        <>
            {status === 'modal' ? (
                <div>
                    <span className='font-bold'>내 여행 목록</span>
                    <div className='h-[427px] rounded-md bg-brightgrey overflow-y-auto mt-2 mb-4'>
                        <div className='border-b border-b-lightgrey py-5'>
                            <div className='flex justify-between ml-20'>
                                <div className='w-1/3 text-center'>
                                    <p>일정</p>
                                </div>
                                <div className='w-1/3 text-center'>
                                    <p>장소</p>
                                </div>
                                <div className='w-1/3 text-center'>
                                    <p>상세보기</p>
                                </div>
                            </div>
                        </div>
                        <div className='py-5'>
                            {contents.map((travel: any) => (
                                <div
                                    key={travel.id}
                                    className='flex items-center justify-between py-[16.5px]'
                                >
                                    <input
                                        type='checkbox'
                                        className='ml-10 mr-5'
                                        onChange={() =>
                                            handleCheckChange(travel.id)
                                        }
                                    />
                                    <div className='w-1/3 text-center'>
                                        {travel.dates}
                                    </div>
                                    <div className='w-1/3 text-center'>
                                        {travel.places}
                                    </div>
                                    <div className='flex w-1/3 justify-center'>
                                        <RoundBtn
                                            label='상세보기'
                                            color='bg-lightgrey'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mx-4 mt-16'>
                        <div className='text-3xl font-bold mb-5'>
                            내 여행 목록
                        </div>
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
                                {datas.length === 0 ? (
                                    <span className='flex justify-center'>
                                        Loading...
                                    </span>
                                ) : (
                                    datas.map((data: Props) => (
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
                                                    onClick={() => {
                                                        sessionStorage.setItem(
                                                            'place',
                                                            data.places
                                                        );
                                                        sessionStorage.setItem(
                                                            'date',
                                                            data.dates
                                                        );
                                                        router.push(
                                                            '/updateschedule'
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <Pagination
                            totalPages={totalPages}
                            current={current}
                            setCurrent={setCurrent}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default MyTravel;
