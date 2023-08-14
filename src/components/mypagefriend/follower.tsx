import RoundBtn from '../layout/roundBtn';
import React, { useEffect, useState } from 'react';
import FriendTwoBtn from './friendTwoBtn';
import { Friend } from '@/types/user';
import {
    acceptFriendRequest,
    getRecieveFriendRequestList,
    rejectFriendRequest
} from '@/apis/user/friend';

interface IFollowerProps {
    handleFriendList: (result: Friend[]) => void;
}

function Follower({ handleFriendList }: IFollowerProps) {
    const [friendReceiveList, setFriendReceiveList] = useState<Friend[]>([]);

    const handleClickAccept = async (user_index: number) => {
        await acceptFriendRequest(user_index);

        const result = friendReceiveList.filter(
            (friend) => friend.user_index === user_index
        );
        console.log('filter data:', result);
        handleFriendList(result);

        const rest = friendReceiveList.filter(
            (friend) => friend.user_index !== user_index
        );
        setFriendReceiveList(rest);
    };

    const handleClickReject = async (user_index: number) => {
        await rejectFriendRequest(user_index);
        setFriendReceiveList(
            friendReceiveList.filter(
                (friend) => friend.user_index !== user_index
            )
        );
    };

    useEffect(() => {
        getRecieveFriendRequestList().then((data) => {
            setFriendReceiveList(data);
        });
    }, []);

    return (
        <div className='h-[342px] bg-brightgrey p-7 m-2.5 mt-5 rounded-lg'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>친구 요청</div>
                <RoundBtn
                    label={`${friendReceiveList.length}개`}
                    color='bg-primary'
                />
            </div>
            <div className='mt-8 h-[220px] overflow-y-auto'>
                {friendReceiveList.map((friend, index) => (
                    <FriendTwoBtn
                        key={index}
                        name={friend.nickname}
                        label1='수락'
                        label2='거절'
                        onClick1={() => handleClickAccept(friend.user_index)}
                        onClick2={() => handleClickReject(friend.user_index)}
                        px={6}
                    />
                ))}
            </div>
        </div>
    );
}

export default Follower;
