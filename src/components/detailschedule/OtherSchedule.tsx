import { updateLists } from '@/apis/travellists/update';
import { travleState } from '@/states/travleLists';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function OtherSchedule({ href }: { href: string }) {
    const [date, setDates] = useState<string>('');
    const [place, setPlace] = useState<string>('');
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const [schedules, setSchedules] = useRecoilState(travleState);
    const [start, setStart] = useState<any>();
    const [end, setEnd] = useState<any>();
    useEffect(() => {
        const d = sessionStorage.getItem('date');
        const p = sessionStorage.getItem('place');

        // const date: any = sessionStorage.getItem('date')?.split('~');
        const s: any = d?.split('~')[0];
        const e: any = d?.split('~')[1].split(' ')[0];
        setStart(new Date(s));
        setEnd(new Date(e));
        setDates(d === null ? '' : d);
        setPlace(!p ? '' : p);
        setReadOnly(p === '' ? false : true);
    }, []);
    const router = useRouter();

    useEffect(() => {}, []);
    const onClick = () => {
        if (!place) {
            alert('여행 지역을 입력해주세요.');
            return;
        }
        if (!readOnly) {
            const old = [...schedules];
            const id = schedules.length + 1;
            old.push({ id: id, dates: date, places: place });
            const datas = {
                arrivalDate: format(end, 'yyyy-MM-dd'),
                departureDate: format(start, 'yyyy-MM-dd'),
                cityId: 0
            };
            updateLists(datas);
            setSchedules(old);
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
                <div className='text-grey mr-7'>여행 지역</div>
                <input
                    value={place}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlace(e.target.value)
                    }
                    className='outline-none w-3/5'
                    readOnly={readOnly}
                />
            </div>
            <button
                className='w-[16%] rounded-lg text-xl bg-primary border-primary'
                onClick={onClick}
            >
                {!readOnly ? '변경사항 저장' : '다른 일정 선택'}
            </button>
        </div>
    );
}
