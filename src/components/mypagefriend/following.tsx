import RoundBtn from '../layout/roundBtn';
import React, { useEffect, useState } from 'react';
import FriendOneBtn from './friendOneBtn';
import { getSendFriendRequestList } from '@/apis/user/friend';
import { Friend } from '@/types/user';

function Following() {
    const [friendRequestList, setFriendRequestList] = useState<Friend[]>([]);

    useEffect(() => {
        getSendFriendRequestList().then((data) => {
            setFriendRequestList(data);
        });
    }, []);

    return (
        <div className='h-[342px] bg-brightgrey p-7 m-2.5 rounded-lg'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>내가 보낸 요청</div>
                <RoundBtn
                    label={`${friendRequestList.length}개`}
                    color='bg-primary'
                />
            </div>
            <div className='mt-8 h-[220px] overflow-y-auto'>
                {friendRequestList.map((friend, index) => (
                    <FriendOneBtn
                        key={index}
                        name={friend.nickname}
                        label1='요청취소'
                        px={6}
                    />
                ))}
            </div>
        </div>
    );
}

export default Following;
