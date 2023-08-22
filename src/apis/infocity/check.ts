import { Server } from '../setting';

export const checkCity = async (idx: number) => {
    const result = await Server.get(`/landmarks/popular?city_index=${idx}`);

    return result.data;
};

export const checkMaeterial = async (idx: number) => {
    const result = await Server.get(`/country-materials/${idx}`);

    return result.data;
};
