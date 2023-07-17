'use client';

import { useState } from 'react';
import ConfirmBtns from "@/components/mypage/confirmBtns";
import MyInfo from "@/components/mypage/myInfo";
import MypageMenus from "@/components/mypage/mypageMenus";
import ProfilePic from "@/components/mypage/profilePic";
import FriendReq from "@/components/mypagefriend/friendReq";
import MyFriends from "@/components/mypagefriend/myFriends";

export default function mypage () {
    const [activeMenu, setActiveMenu] = useState('정보');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };
    
    let content;
    if(activeMenu === '정보') {
        content = (
            <>
                <ProfilePic />
                <MyInfo />
                <ConfirmBtns />
            </>
        );
    } else if (activeMenu === '여행일정') {
        content = (
            <div>여행일정 페이지</div>
        )
    } else if (activeMenu === '내가방') {
        content = (
            <div>내가방 페이지</div>
        )
    } else if (activeMenu === '저장한 정보') {
        content = (
            <div>저장한 정보 페이지</div>
        )
    } else if (activeMenu === '친구관리') {
        content = (
            <>
                <MyFriends />
                <FriendReq />
            </>
        );
    }

    return (
        <div>
            <MypageMenus activeMenu={activeMenu} onMenuClick={handleMenuClick}/>
            {content}
        </div>
    )
}