import { ICreateScheduleProps } from '@/types/schedule';
import register from '@/utils/register';
import { useRouter } from 'next/navigation';

const useCreateSchedule = () => {
    const router = useRouter();
    const createSchedule = ({
        startDate,
        endDate,
        city
    }: ICreateScheduleProps) => {
        if (startDate === null || endDate === null) {
            alert('날짜를 선택해주세요.');
            return;
        }
        register({ startDate, endDate, city });
        router.push('/newschedule');
    };

    return { createSchedule };
};

export default useCreateSchedule;
