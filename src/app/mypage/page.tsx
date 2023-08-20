'use client';

import React, { useEffect, useState } from 'react';
import ConfirmBtns from '@/components/mypage/confirmBtns';
import MyInfo from '@/components/mypage/myInfo';
import MypageMenus from '@/components/mypage/mypageMenus';
import ProfilePic from '@/components/mypage/profilePic';
import FriendReq from '@/components/mypagefriend/friendReq';
import MyFriends from '@/components/mypagefriend/myFriends';
import { getMyInformation } from '@/apis/user/friend';
import { Friend, IUser } from '@/types/user';
import MyTravelList from '@/components/mypage/MyTravelList';
import MakeSchedule from '@/components/mypage/MakeSchedule';
import MyBagList from '@/components/mypage/MyBagList';

export default function Mypage() {
    const [activeMenu, setActiveMenu] = useState<string>('정보');
    const [friendList, setFriendList] = useState<Friend[]>([]);
    const [userData, setUserData] = useState<IUser>({
        email: '로딩중...',
        nickname: '로딩중...'
    } as IUser);

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    const handleFriendList = (result: Friend[]) => {
        setFriendList([...friendList, ...result]);
    };

    const handleSetNationality = (nationality: string) => {
        setUserData({ ...userData, nationality });
    };

    const handleProfileImage = (profileImg: string) => {
        setUserData({ ...userData, profileImg });
    };

    let content;
    if (activeMenu === '정보') {
        content = (
            <>
                {/* 프로필 사진 */}
                <ProfilePic
                    userData={userData}
                    handleProfileImage={handleProfileImage}
                />
                {/* 기본정보 */}
                <MyInfo
                    userData={userData}
                    handleSetNationality={handleSetNationality}
                />
                {/* 탈퇴/수정 버튼 */}
                <ConfirmBtns />
            </>
        );
    } else if (activeMenu === '여행일정') {
        content = (
            <div className='pt-4'>
                <MyTravelList option='수정하기' />
                <MakeSchedule />
            </div>
        );
    } else if (activeMenu === '내가방') {
        content = (
            <div className='pt-4'>
                <MyBagList />
            </div>
        );
    } else if (activeMenu === '친구관리') {
        content = (
            <>
                {/* 나의 친구 */}
                <MyFriends
                    friendList={friendList}
                    setFriendList={setFriendList}
                />
                {/* 친구 요청 */}
                <FriendReq handleFriendList={handleFriendList} />
            </>
        );
    }

    useEffect(() => {
        getMyInformation().then((data) => {
            setUserData(data);
        });
    }, []);

    return (
        <div>
            {/* 상단 탭바 */}
            <MypageMenus
                activeMenu={activeMenu}
                onMenuClick={handleMenuClick}
            />
            {content}
        </div>
    );
}
