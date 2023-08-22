import { atom } from 'recoil';
import { v1 } from 'uuid';

export const scheduleState = atom({
    key: `scheduleMode/${v1()}`,
    default: false
});
