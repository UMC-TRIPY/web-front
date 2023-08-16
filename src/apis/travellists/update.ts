import { Server } from '../setting';

interface Props {
    arrivalDate: string;
    departureDate: string;
    cityId: number;
}

export const updateLists = async (list: Props) => {
    try {
        const result = await Server.post<Props>(`/travel-plans/user/1`, {
            list
        });
        console.log(result);
    } catch (err: any) {
        console.log(err);
    }
};
