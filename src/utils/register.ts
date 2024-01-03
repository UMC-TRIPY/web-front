import { updateLists } from '@/apis/travellists/update';
import { ICityProps } from '@/types/city';
import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';

interface IRegisterProps {
    startDate: Date | null;
    endDate: Date | null;
    city: ICityProps;
}

const register = ({ startDate, endDate, city }: IRegisterProps) => {
    if (startDate === null || endDate === null) return;
    const start: string = format(startDate, 'yyyy.MM.dd');
    const end: string = format(endDate, 'yyyy.MM.dd');
    const difference: number = differenceInDays(endDate, startDate) + 1;
    const dates: string = `${start} ~ ${end} (${
        difference - 1
    }박 ${difference}일)`;
    sessionStorage.setItem('date', dates);
    sessionStorage.setItem('place', city.cityKo);

    updateLists({
        cityname: city.cityKo,
        departureDate: format(startDate, 'yyyy-MM-dd'),
        arrivalDate: format(endDate, 'yyyy-MM-dd')
    });
};

export default register;
