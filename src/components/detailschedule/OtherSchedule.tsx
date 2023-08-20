import { updateLists } from '@/apis/travellists/update';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function OtherSchedule({
    href,
    register
}: {
    href: string;
    register: boolean;
}) {
    const [date, setDates] = useState<string>('');
    const [place, setPlace] = useState<string>('');
    const [start, setStart] = useState<any>();
    const [end, setEnd] = useState<any>();
    useEffect(() => {
        const d = sessionStorage.getItem('date');
        const p = sessionStorage.getItem('place');

        const s: any = d?.split('~')[0];
        const e: any = d?.split('~')[1].split(' ')[0];
        setStart(new Date(s));
        setEnd(new Date(e));
        setDates(!d ? '' : d);
        setPlace(!p ? '' : p);
    }, []);
    const router = useRouter();

    useEffect(() => {}, []);
    const onClick = () => {
        if (!place) {
            alert('여행 지역을 입력해주세요.');
            return;
        }
        if (!register) {
            const datas = {
                cityname: place,
                departureDate: format(start, 'yyyy-MM-dd'),
                arrivalDate: format(end, 'yyyy-MM-dd')
            };
            updateLists(datas);
        }
        router.push(`/${href}`);
    };
    return (
        <div className='flex justify-between '>
            <div className='border border-lightgrey w-[51%] py-5 px-5 rounded-lg text-xl'>
                <span className='mr-7 text-grey'>선택 일정</span>
                <span>{date}</span>
            </div>
            <div className='border border-lightgrey w-[31%] py-5 px-5 rounded-lg text-xl flex'>
                <span className='text-grey mr-7'>여행 지역</span>
                <span>{place}</span>
            </div>
            <button
                className='w-[16%] rounded-lg text-xl bg-primary border-primary'
                onClick={onClick}
            >
                {!register ? '변경사항 저장' : '다른 일정 선택'}
            </button>
        </div>
    );
}
