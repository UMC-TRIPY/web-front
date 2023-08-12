import { BiSearch } from 'react-icons/bi';
import RoundBtn from '../layout/roundBtn';
import React, { useEffect, useState } from 'react';
import FriendTwoBtn from './friendTwoBtn';
import { getFriendList, getSearchUserList } from '@/apis/user/friend';
import { Friend } from '@/types/user';

function SendFollow() {
    const [friendSearchList, setFriendSearchList] = useState<Friend[]>([]);

    const [searchText, setSearchText] = useState<string>('');

    const handleSearchForm = (e: any) => {
        e.preventDefault();
        getSearchUserList(searchText).then((data) => {
            setFriendSearchList(data);
        });
    };

    return (
        <div className='h-[704px] bg-brightgrey p-7 m-2.5 rounded-lg'>
            <div>
                <div className='text-3xl font-bold'>친구 요청 보내기</div>
                <form
                    className='flex flex-col justify-center mt-12'
                    onSubmit={handleSearchForm}
                >
                    <input
                        className='border border-lightgrey rounded-lg h-12 p-4'
                        type='text'
                        placeholder='친구가 되고 싶은 닉네임, 전화번호를 입력하세요'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className='absolute self-end mr-5 hover:cursor-pointer'>
                        <BiSearch size={24} />
                    </button>
                </form>
                <div className='mt-6 h-[480px] overflow-y-auto'>
                    {friendSearchList.map((friend, index) => (
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
