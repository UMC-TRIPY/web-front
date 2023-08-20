import { Server } from '../setting';

interface Props {
    arrivalDate: string;
    departureDate: string;
    cityId: number;
}

export const updateLists = async (list: Props) => {
    await Server.post<Props>(`/travel-plans/user/travel/2`, list)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};