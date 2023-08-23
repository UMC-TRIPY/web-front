import { checkLists } from '@/apis/travellists/check';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import differenceInDays from 'date-fns/differenceInDays';
import SelectScheduleModal from '../modal/SelectScheduleModal';
import { useSetRecoilState } from 'recoil';
import { planIDState } from '@/states/schedule';

interface TravelListProps {
    city_name: string;
    departureDate: string;
    arrivalDate: string;
    plan_index: number;
}

interface ScheduleProps {
    pid: number;
    dates: string;
    places: string;
}

export default function OtherSchedule({
    href,
    register,
    top
}: {
    href: string;
    register: boolean;
    top: string;
}) {
    const [date, setDate] = useState<string>('');
    const [place, setPlace] = useState<string>('');
    const [schedules, setSchedules] = useState<ScheduleProps[] | undefined>();
    const [modal, setModal] = useState<boolean>(false);

    const setPlanID = useSetRecoilState(planIDState);

    useEffect(() => {
        let d: any, p: any;
        if (typeof window! == 'undefined') {
            d = localStorage.getItem('date');
            p = localStorage.getItem('place');
        }

        setDate(!d ? '' : d);
        setPlace(!p ? '' : p);
        checkLists()
            .then((res) => {
                let tmp: any[] = [];
                console.log(res);
                setPlanID(res[0].plan_index);
                res.map((d: any, idx: number) => {
                    const departureDate =
                        d.departureDate === '0000-00-00'
                            ? new Date()
                            : new Date(d.departureDate.slice(0, 10));
                    const arrivalDate =
                        d.departureDate === '0000-00-00'
                            ? new Date()
                            : new Date(d.arrivalDate.slice(0, 10));
                    const difference = differenceInDays(
                        arrivalDate,
                        departureDate
                    );
                    const p =
                        typeof window! == 'undefined'
                            ? localStorage.getItem('pid')
                            : null;
                    tmp.push({
                        pid: p,
                        dates: `${format(
                            departureDate,
                            'yyyy.MM.dd'
                        )} ~ ${format(arrivalDate, 'yyyy.MM.dd')} (${
                            difference === 0
                                ? '당일치기'
                                : `${difference}박 ${difference + 1}일`
                        })`,
                        places: d.city_name === null ? '미정' : d.city_name
                    });
                });
                setSchedules(tmp);
            })
            .catch((err) => console.log(err));
    }, []);
    const router = useRouter();

    const onClick = () => {
        if (!place) {
            alert('여행 지역을 입력해주세요.');
            return;
        }
        router.push(`/${href}`);
    };
    return (
        <div className='flex justify-between '>
            <div
                className={`border border-lightgrey min-w-[656px] py-5 px-5 rounded-lg text-xl ${
                    register ? 'cursor-default' : 'cursor-pointer'
                }`}
                onClick={() => setModal(true)}
            >
                <span className='mr-7 text-grey'>선택 일정</span>
                <span>{date}</span>
            </div>
            <div className='border border-lightgrey min-w-[400px] py-5 px-5 rounded-lg text-xl flex cursor-default'>
                <span className='text-grey mr-7'>여행 지역</span>
                <span>{place}</span>
            </div>
            <button
                className='min-w-[200px] rounded-lg text-xl bg-primary border-primary'
                onClick={onClick}
            >
                {register ? '변경사항 저장' : '다른 일정 선택'}
            </button>
            {modal && !register && (
                <SelectScheduleModal
                    setModalState={setModal}
                    schedules={schedules}
                    setDate={setDate}
                    setPlace={setPlace}
                    top={top}
                />
            )}
        </div>
    );
}
