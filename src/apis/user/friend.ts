import { Server } from '../setting';
import { FriendType } from './types';

export const sendFriendRequest = async (friend_index: number | null) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    try {
        const result = await Server.post(`mypage/friends/${uid}/request`, {
            friend_index
        });
        console.log(result);
    } catch (error) {
        console.log('uid가 존재하지 않습니다 :', error);
    }
};

export const cancelFriendRequest = async (friend_index: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/cancel`, {
        friend_index
    });
    console.log(result);
};

export const getSendFriendRequestList = async () => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.get(`mypage/friends/${uid}/request`);
    console.log(result);
};

export const getRecieveFriendRequestList = async () => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.get(`mypage/friends/${uid}/receive`);
    console.log(result);
};

export const acceptFriendRequest = async (friend_index: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/accept`, {
        friend_index
    });
    console.log(result);
};

export const rejectFriendRequest = async (friend_index: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/reject`, {
        friend_index
    });
    console.log(result);
};

export const getFriendList = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.get<FriendType>(`mypage/${uid}/friends`);
    return result.data.data;
};
