import { useEffect, useState } from 'react';

export default function OtherSchedule() {
    const [date, setDates] = useState<string>(
        '2023.06.30~2023.07.02 (2박 3일)'
    );
    const [place, setPlace] = useState<string>('부산');
    useEffect(() => {
        const d = sessionStorage.getItem('date');
        const p = sessionStorage.getItem('place');
        setDates(d === null ? '2023.06.30~2023.07.02 (2박 3일)' : d);
        setPlace(p === null ? '부산' : p);
    }, []);
    return (
        <div className='flex justify-between'>
            <div className='border border-lightgrey w-[51%] py-5 px-5 rounded-lg text-xl'>
                <span className='mr-7 text-grey'>선택 일정</span>
                <span>{date}</span>
            </div>
            <div className='border border-lightgrey w-[31%] py-5 px-5 rounded-lg text-xl'>
                <span className='mr-7 text-grey'>여행 지역</span>
                <span>{place}</span>
            </div>
            <button className='border border-black w-[16%] text-xl rounded-lg text-xl bg-primary border-primary'>
                다른 일정 선택
            </button>
        </div>
    );
}
