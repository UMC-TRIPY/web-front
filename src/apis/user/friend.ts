import { Server } from '../setting';
import { FriendReturnType, InformationReturnType } from './types';

export const getMyInformation = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.get<InformationReturnType>(
        `mypage/user/${uid}`
    );
    return result.data;
};

export const deleteFriend = async (friend_idx: number) => {
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.delete<InformationReturnType>(
        `mypage/friends/${uid}`,
        { data: { friend_idx } }
    );
    console.log('deleteFriend: ', result);
    return result.data;
};

export const blockFriend = async (friend_idx: number) => {
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.post<InformationReturnType>(
        `mypage/friends/${uid}/break`,
        { friend_idx }
    );
    console.log('blockFriend: ', result);

    return result.data;
};

export const sendFriendRequest = async (friend_idx: number | null) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    try {
        const result = await Server.post(`mypage/friends/${uid}/request`, {
            friend_idx
        });
        console.log('sendFriendRequest:', result);
    } catch (error) {
        console.log('uid가 존재하지 않습니다 :', error);
    }
};

export const cancelFriendRequest = async (friend_idx: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/cancel`, {
        friend_idx
    });
    console.log('cancelFriendRequest:', result);
};

export const getSendFriendRequestList = async () => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.get<FriendReturnType>(
        `mypage/friends/${uid}/request`
    );
    return result.data.data;
};

export const getRecieveFriendRequestList = async () => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 1;
    const result = await Server.get<FriendReturnType>(
        `mypage/friends/${uid}/receive`
    );
    return result.data.data;
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
    const result = await Server.get<FriendReturnType>(`mypage/${uid}/friends`);
    return result.data.data;
};

export const getSearchUserList = async (keyword: string) => {
    const result = await Server.get(`mypage/users/search?keyword=${keyword}`);
    return result.data.data;
};
