import { Server } from '../setting';

interface ListProps {
    arrivalDate: string;
    departureDate: string;
    cityname: string;
}

interface ScheduleProps {
    plan_date: string;
    plan_color: string;
    plan_lineColor: string;
    plan_title: string;
    plan_column: number;
    start_time: string;
    plan_halfHour: number;
    plan_place: string;
    plan_budget: string;
    plan_memo: string;
    plan_image: string;
    plan_file: string;
}

export const updateLists = async (list: ListProps) => {
    await Server.post<ListProps>(`/travel-plans/user/travel/2`, list)
        .then((res: any) => {
            console.log(res);
            sessionStorage.setItem('pid', res.data.plan_index);
        })
        .catch((err) => console.log(err));
};

export const updateSchedule = async (schedule: ScheduleProps, pid: number) => {
    await Server.post<any>(`/travel-plans/user/plans/detailed/${pid}`, schedule)
        .then((res: any) => console.log(res))
        .catch((err) => console.log(err));
};

export const getScheduleData = async (pid: number) => {
    return Server.get<any>(`/travel-plans/user/plans/all/${pid}`);
};
