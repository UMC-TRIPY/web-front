import { Server } from '../setting';

export const checkLists = async () => {
    const result = await Server.get(`/travel-plans/user/plans/2`);

    return result.data;
};

export const checkSchedules = async (pid: number) => {
    const result = await Server.get(`/travel-plans/user/plans/all/${pid}`);

    return result.data;
};
