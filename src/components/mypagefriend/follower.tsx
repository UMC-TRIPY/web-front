import RoundBtn from '../layout/roundBtn';
import React, { useEffect, useState } from 'react';
import FriendTwoBtn from './friendTwoBtn';
import { Friend } from '@/types/user';
import { getRecieveFriendRequestList } from '@/apis/user/friend';

function Follower() {
    const [friendReceiveList, setFriendReceiveList] = useState<Friend[]>([]);

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
                        px={6}
                    />
                ))}
            </div>
        </div>
    );
}

export default Follower;
