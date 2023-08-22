import { Server } from '../setting';

export const checkLists = async () => {
    const uid = localStorage.getItem('uid');
    const result = await Server.get(`/travel-plans/user/plans/${uid}`);

    return result.data;
};

export const checkSchedules = async (pid: number) => {
    const result = await Server.get(`/travel-plans/user/plans/all/${pid}`);

    return result.data;
};
