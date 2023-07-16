'use client';

import ConfirmBtns from "@/components/mypage/confirmBtns";
import MyInfo from "@/components/mypage/myInfo";
import MypageMenus from "@/components/mypage/mypageMenus";
import ProfilePic from "@/components/mypage/profilePic";
import MyFriends from "@/components/mypagefriend/myFriends";

export default function mypage () {
    return (
        <div>
            <MypageMenus />

            <MyFriends />
        </div>
    )
}