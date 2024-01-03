import { IDateProps } from './calendar';
import { ICityProps } from './city';

export interface ICreateScheduleProps extends IDateProps {
    city: ICityProps;
}
