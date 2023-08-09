import Pagination from '../maincommunity/Pagination';
import FriendTwoBtn from './friendTwoBtn';
import React, { useState, useEffect } from 'react';

const friends: string[] = [
    '미리',
    '메이',
    '규',
    '루카',
    '레니',
    '시미',
    '초이',
    '폴',
    '에그먼'
];

function MyFriends() {
    const totalPages = Math.ceil(friends.length / 4);
    const [current, setCurrent] = useState<number>(1);
    const [datas, setDatas] = useState<string[]>(friends.slice(0, 4));
    useEffect(() => {
        setDatas(friends.slice((current - 1) * 4, current * 4));
    }, [current]);
    return (
        <div>
            <div className='text-3xl font-bold mx-4 mt-20'>나의 친구</div>
            <div className='mx-4 py-4'>
                {datas.map((data: string, index: number) => (
                    <FriendTwoBtn
                        key={index}
                        name={data}
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
