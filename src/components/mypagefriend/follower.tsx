import RoundBtn from "../layout/roundBtn";
import React, { useState } from "react";

interface FriendProps {
    name: string;
}

function Friend (props: FriendProps) {
    // 친구 프사 + 닉네임 + 버튼
    return (
        <div className="flex my-4 justify-between">
            <div className="flex items-center">
                <img className="mr-5" src="/images/user.svg" alt="친구 프로필사진" />
                {props.name}
            </div>
            <div className="flex">
                <RoundBtn label="수락" color="bg-lightgrey" px={10}/>
                <RoundBtn label="거절" color="bg-lightgrey" px={10}/>
            </div>
        </div>
    )
}

function Follower () {
    const [friends, setFriends] = useState([
        '미리',
        '메이',
        '규',
        '루카',
        '레니',
        '시미',
        '초이',
        '폴',
        '에그먼',
    ]);

    return (
        <div className="h-req-half-height bg-brightgrey p-7 m-2.5 mt-5 rounded-lg overflow-y-auto">
            <div className="flex justify-between">
                <div className="text-3xl font-bold">
                    친구 요청
                </div>
                <RoundBtn label={`${friends.length}개`} color="bg-primary" />
            </div>
            <div className="mt-12">
                {friends.map((friend, index) => (
                    <Friend key={index} name={friend} />
                ))}
            </div>
        </div>
    )
}

export default Follower;