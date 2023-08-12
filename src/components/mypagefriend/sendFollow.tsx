import { BiSearch } from 'react-icons/bi';
import RoundBtn from '../layout/roundBtn';
import React, { useState } from 'react';
import FriendTwoBtn from './friendTwoBtn';

function SendFollow() {
    const [friends, setFriends] = useState([
        {
            user_index: 0,
            nickname: '미리',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 1,
            nickname: '규',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 2,
            nickname: '루카',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 3,
            nickname: '레니',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 4,
            nickname: '시미',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 5,
            nickname: '초이',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 6,
            nickname: '폴',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        },
        {
            user_index: 7,
            nickname: '에그먼',
            profileImg: 'https://example.com/profile/johndoe.jpg'
        }
    ]);

    return (
        <div className='h-[704px] bg-brightgrey p-7 m-2.5 rounded-lg'>
            <div>
                <div className='text-3xl font-bold'>친구 요청 보내기</div>
                <div className='flex flex-col justify-center mt-12'>
                    <input
                        className='border border-lightgrey rounded-lg h-12 p-4'
                        type='text'
                        placeholder='친구가 되고 싶은 닉네임, 전화번호를 입력하세요'
                    />
                    <BiSearch
                        size={24}
                        className='absolute self-end mr-5 hover:cursor-pointer'
                    />
                </div>
                <div className='mt-6 h-[480px] overflow-y-auto'>
                    {friends.map((friend, index) => (
                        <FriendTwoBtn
                            key={index}
                            name={friend.nickname}
                            label1='요청'
                            label2='차단'
                            px={6}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SendFollow;
