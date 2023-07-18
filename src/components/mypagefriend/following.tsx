import RoundBtn from "../layout/roundBtn";
import React, { useState } from "react";

interface FriendProps {
    name: string;
}

function Friend (props: FriendProps) {
    return (
        <div className="flex my-4 justify-between">
            <div className="flex items-center">
                <img className="mr-5" src="/images/user.svg" alt="친구 프로필사진" />
                {props.name}
            </div>
            <div className="flex">
                <RoundBtn label="요청취소" color="bg-lightgrey" px={6}/>
            </div>
        </div>
    )
}

function Following () {
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
        <div className="h-req-half-height bg-brightgrey p-7 m-2.5 rounded-lg overflow-y-auto">
            <div className="text-3xl font-bold">
                내가 보낸 요청
            </div>
            <div className="mt-12">
                {friends.map((friend, index) => (
                    <Friend key={index} name={friend} />
                ))}
            </div>
        </div>
    )
}

export default Following;