import axios from 'axios';

export const Server = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    timeout: 3000,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
