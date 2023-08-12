import FriendTwoBtn from './friendTwoBtn';
import React, { useEffect, useState } from 'react';
import { Friend } from '@/types/user';
import { getFriendList } from '@/apis/user/friend';
import Pagination from '../maincommunity/Pagination';

function MyFriends() {
    const [friendList, setFriendList] = useState<Friend[]>([]);

    const totalPages = Math.ceil(friendList.length / 4);
    const [current, setCurrent] = useState<number>(1);
    const [currentData, setCurrentData] = useState<Friend[]>([]);

    useEffect(() => {
        getFriendList().then((data) => {
            setFriendList(data);
            setCurrentData(friendList.slice(0, 4));
        });
    }, []);

    useEffect(() => {
        setCurrentData(friendList.slice((current - 1) * 4, current * 4));
    }, [current]);

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
                    />
                ))}
            </div>
            <Pagination
                totalPages={totalPages}
                current={current}
                setCurrent={setCurrent}
            />
        </div>
    );
}

export default MyFriends;
