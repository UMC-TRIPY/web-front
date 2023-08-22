import { useState, useEffect } from 'react';
import { checkLists } from '@/apis/travellists/check';
import { useRouter } from 'next/navigation';
import RoundBtn from '../layout/roundBtn';
import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import Pagination from '../maincommunity/Pagination';
import ScheduleDetailModal from '../modal/ScheduleDetailModal';

interface Props {
    pid: number;
    id: number;
    dates: string;
    places: string;
}

export default function MyTravelList({ option }: { option: string }) {
    const [contents, setContents] = useState<any>([]);
    const [modal, setModal] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        checkLists().then((res) => {
            let tmp: any[] = [];
            res.map((d: any, idx: number) => {
                const departureDate =
                    d.departureDate === '0000-00-00'
                        ? new Date()
                        : new Date(d.departureDate.slice(0, 10));
                const arrivalDate =
                    d.departureDate === '0000-00-00'
                        ? new Date()
                        : new Date(d.arrivalDate.slice(0, 10));
                const difference = differenceInDays(arrivalDate, departureDate);
                tmp.push({
                    pid: d.plan_index,
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

    const totalPages = Math.ceil(contents.length / 8);
    const [current, setCurrent] = useState<number>(1);
    const [datas, setDatas] = useState<Props[]>(contents.slice(0, 8));
    useEffect(() => {
        setDatas(contents.slice((current - 1) * 8, current * 8));
        console.log(datas);
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
                    {datas.length === 0 ? (
                        <span className='flex justify-center'>Loading...</span>
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
                                        onClick={() => {
                                            sessionStorage.setItem(
                                                'place',
                                                data.places
                                            );
                                            sessionStorage.setItem(
                                                'date',
                                                data.dates
                                            );
                                            setModal(true);
                                        }}
                                    />
                                    <RoundBtn
                                        label={option}
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
                                            sessionStorage.setItem(
                                                'pid',
                                                data.pid.toString()
                                            );

                                            router.push('/updateschedule');

                                            // router.push('/mybag/new');
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
            {modal && <ScheduleDetailModal setIsModal={setModal} />}
        </div>
    );
}
