'use client';

import ConfirmBtns from "@/components/mypage/confirmBtns";
import MyInfo from "@/components/mypage/myInfo";
import MypageMenus from "@/components/mypage/mypageMenus";
import ProfilePic from "@/components/mypage/profilePic";

export default function mypage () {
    return (
        <div>
            <MypageMenus />
            <ProfilePic />
            <MyInfo />
            <ConfirmBtns />
        </div>
    )
}