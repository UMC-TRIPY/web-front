import { Server } from './setting';
import { MaterialReturnType } from './types';

export const addBagMaterial = async (
    bagIndex: number,
    materialIndex: number
) => {
    const result = await Server.post('/api/bag-materials', {
        bagIndex,
        materialIndex
    });
    console.log('addBagMaterial API: ', result);
    return result;
};

export const getMaterials = async () => {
    const result = await Server.get<MaterialReturnType[]>('/materials');
    return result.data;
};
