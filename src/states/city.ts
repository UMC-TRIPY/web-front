import { atom } from 'recoil';
import { v1 } from 'uuid';

export const London = atom({
    key: `london/${v1()}`,
    default: []
});
