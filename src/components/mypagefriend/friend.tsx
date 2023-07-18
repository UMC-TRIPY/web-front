import RoundBtn from "../layout/roundBtn";
import React from "react";

interface FriendProps {
    name: string;
}

function Friend (props: FriendProps) { 
    // 친구 프사 + 닉네임 + 버튼
    return (
        <div className="flex my-5 justify-between">
            <div className="flex items-center">
                <img className="mr-5" src="/images/user.svg" alt="친구 프로필사진" />
                {props.name}
            </div>
            <div className="flex">
                <RoundBtn label="초대하기" color="bg-lightgrey" px={6} />
                <RoundBtn label="친구끊기" color="bg-lightgrey" px={6}/>
            </div>
        </div>
    )
}

export default Friend;