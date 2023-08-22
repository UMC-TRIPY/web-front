import { atom } from 'recoil';
import { v1 } from 'uuid';

export const bagIDState = atom({
    key: `bagIDState/${v1()}`,
    default: -1
});

export const planIDState = atom({
    key: `planIDState/${v1()}`,
    default: -1
});

export const scheduleState = atom({
    key: `scheduleMode/${v1()}`,
    default: false
});
