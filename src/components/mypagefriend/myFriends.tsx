import FriendTwoBtn from './friendTwoBtn';
import React, { useEffect, useState } from 'react';
import { Friend, ISchedule } from '@/types/user';
import {
    deleteFriend,
    getCreatedScheduleList,
    getFriendList,
    inviteFriend
} from '@/apis/user/friend';
import Pagination from '../maincommunity/Pagination';
import FriendOneBtn from './friendOneBtn';
import RoundBtn from '../layout/roundBtn';
import ScheduleListModal from '../modal/ScheduleListModal';

interface MyFriendsProps {
    friendList: Friend[];
    setFriendList: React.Dispatch<React.SetStateAction<Friend[]>>;
}

function MyFriends({ friendList, setFriendList }: MyFriendsProps) {
    // const [friendList, setFriendList] = useState<Friend[]>([]);

    const totalPages = Math.ceil(friendList.length / 4);
    const [current, setCurrent] = useState<number>(1);
    const [currentData, setCurrentData] = useState<Friend[]>([]);

    const [isModal, setIsModal] = useState<boolean>(false);
    const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
    const [targetFriend, setTargetFriend] = useState<number>(-1);

    const handleDeleteFriend = async (user_index: number) => {
        await deleteFriend(user_index);
        const result = friendList.filter(
            (friend) => friend.user_index !== user_index
        );
        console.log('handle delete: ', result);
        setFriendList(result);
    };

    const handleClickInviteBtn = (uid2: number) => {
        setTargetFriend(uid2);
        setIsModal(true);
    };

    const handleInviteSchedule = async (pid: number) => {
        await inviteFriend(pid, targetFriend);
        setIsModal(false);
    };

    useEffect(() => {
        getCreatedScheduleList().then((data) => {
            setScheduleList(data);
        });
    }, []);

    useEffect(() => {
        getFriendList().then((data) => {
            setFriendList(data);
            setCurrentData(data.slice(0, 4));
        });
    }, []);

    useEffect(() => {
        setCurrentData(friendList.slice((current - 1) * 4, current * 4));
    }, [friendList, current]);

    return (
        <div>
            <div className='text-3xl font-bold mx-4 mt-20'>나의 친구</div>
            <div className='mx-4 py-4'>
                {currentData.map((friend: Friend, index: number) => (
                    <FriendTwoBtn
                        key={index}
                        name={friend.nickname}
                        label1='초대하기'
                        label2='친구끊기'
                        px={6}
                        onClick1={() => handleClickInviteBtn(friend.user_index)}
                        onClick2={() => handleDeleteFriend(friend.user_index)}
                    />
                ))}
            </div>
            {isModal && (
                <ScheduleListModal
                    setIsModal={setIsModal}
                    scheduleList={scheduleList}
                    handleInviteSchedule={handleInviteSchedule}
                />
            )}
            <Pagination
                totalPages={totalPages}
                current={current}
                setCurrent={setCurrent}
            />
        </div>
    );
}

export default MyFriends;
