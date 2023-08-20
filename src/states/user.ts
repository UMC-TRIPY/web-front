import { atom } from 'recoil';
import { v1 } from 'uuid';

export const emailState = atom({
    key: `emailState/${v1()}`,
    default: ''
});

export const accessTokenState = atom({
    key: `accessTokenState/${v1()}`,
    default: ''
});

export const refreshTokenState = atom({
    key: `refreshTokenstate/${v1()}`,
    default: ''
});

export const isLoggedInState = atom({
    key: `isLoggedInState/${v1()}`,
    default: false
});
