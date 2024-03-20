import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SelectScheduleModal from '../modal/SelectScheduleModal';

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
