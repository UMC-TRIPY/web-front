import { Server } from '../setting';

export const checkLists = async () => {
    const result = await Server.get(`/travel-plans/user/plans/2`);

    return result.data;
};

export const checkSchedules = async () => {
    const result = await Server.get(`/travel-plans/user/plans/all/127`);

    return result.data;
};
