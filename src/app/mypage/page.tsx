'use client';

import React, { useState } from 'react';
import ConfirmBtns from "@/components/mypage/confirmBtns";
import MyInfo from "@/components/mypage/myInfo";
import MypageMenus from "@/components/mypage/mypageMenus";
import ProfilePic from "@/components/mypage/profilePic";
import FriendReq from "@/components/mypagefriend/friendReq";
import MyFriends from "@/components/mypagefriend/myFriends";

export default function mypage () {
    const [activeMenu, setActiveMenu] = useState<string>('정보');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };
    
    let content;
    if(activeMenu === '정보') {
        content = (
            <>
                {/* 프로필 사진 */}
                <ProfilePic />
                {/* 기본정보 */}
                <MyInfo />
                {/* 탈퇴/수정 버튼 */}
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
                {/* 나의 친구 */}
                <MyFriends />
                {/* 친구 요청 */}
                <FriendReq />
            </>
        );
    }

    return (
        <div>
            {/* 상단 탭바 */}
            <MypageMenus activeMenu={activeMenu} onMenuClick={handleMenuClick}/>
            {content}
        </div>
    )
}