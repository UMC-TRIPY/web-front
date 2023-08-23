import { Server } from '../setting';
import {
    FriendReturnType,
    InformationReturnType,
    InvitedFriendReturnType,
    IScheduleReturnType
} from './types';

export const getMyInformation = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    const result = await Server.get<InformationReturnType>(
        `mypage/user/${uid}`
    );
    return result.data;
};

export const deleteFriend = async (friend_index: number) => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    const result = await Server.delete<InformationReturnType>(
        `mypage/friends/${uid}`,
        { data: { friend_index } }
    );
    console.log('deleteFriend: ', result);
    return result.data;
};

export const blockFriend = async (friend_index: number) => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.post<InformationReturnType>(
        `mypage/friends/${uid}/break`,
        { friend_index }
    );
    console.log('blockFriend: ', result);

    return result.data;
};

export const sendFriendRequest = async (friend_index: number | null) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    try {
        const result = await Server.post(`mypage/friends/${uid}/request`, {
            friend_index
        });
        console.log('sendFriendRequest:', result);
    } catch (error) {
        console.log('uid가 존재하지 않습니다 :', error);
    }
};

export const cancelFriendRequest = async (friend_index: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/cancel`, {
        friend_index
    });
    console.log('cancelFriendRequest:', result);
};

export const getSendFriendRequestList = async () => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.get<FriendReturnType>(
        `mypage/friends/${uid}/request`
    );
    return result.data.data;
};

export const getRecieveFriendRequestList = async () => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.get<FriendReturnType>(
        `mypage/friends/${uid}/receive`
    );
    return result.data.data;
};

export const acceptFriendRequest = async (friend_index: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/accept`, {
        friend_index
    });
    console.log(result);
};

export const rejectFriendRequest = async (friend_index: number) => {
    // TODO: 로그인 성공 시 uid 발급
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.post(`mypage/friends/${uid}/reject`, {
        friend_index
    });
    console.log(result);
};

export const getFriendList = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 1;
    const result = await Server.get<FriendReturnType>(`mypage/${uid}/friends`);
    return result.data.data;
};

export const getSearchUserList = async (keyword: string) => {
    const result = await Server.get(`mypage/users/search?keyword=${keyword}`);
    return result.data.data;
};

// 일정에 친구 초대
export const inviteFriend = async (pid: number, uid2: number) => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    const result = await Server.post(
        `travel-plans/user/plans/friend/${uid}/${pid}`,
        { uid2 }
    );
    console.log('친구초대:', result.data);
};

/**
 *
 * 내가 생성한 여행목록 조회
 *
 * */

export const getCreatedScheduleList = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 3;
    const result = await Server.get<IScheduleReturnType[]>(
        `travel-plans/user/made/plan/${uid}`
    );
    console.log('getCreatedScheduleList: ', result.data);
    return result.data;
};

export const getInvitedFriendList = async (pid: number) => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    // const uid = 2;
    // pid = 6;
    const result = await Server.get<InvitedFriendReturnType[]>(
        `travel-plans/user/plans/friend/${uid}/${pid}`
    );
    console.log('getInvitedFriendList: ', result.data);
    return result.data;
};
