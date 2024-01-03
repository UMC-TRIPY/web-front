import { IDateProps, IOpenStateProps } from './calendar';
import { ICityProps } from './city';

export interface ICreateScheduleProps extends IDateProps {
    city: ICityProps;
}

export interface IMakeTripDatesProps extends IDateProps, IOpenStateProps {
    city: ICityProps;
}
