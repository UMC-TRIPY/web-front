import { Server } from './setting';

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
    const result = await Server.get('/api/materials');
    console.log('getMaterials API: ', result);
    return result;
};
