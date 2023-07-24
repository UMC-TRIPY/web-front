import RoundBtn from "../layout/roundBtn";
import React, { useState } from "react";
import FriendTwoBtn from "./friendTwoBtn";

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
                    <FriendTwoBtn key={index} name={friend} label1="수락" label2="거절" px={6}/>
                ))}
            </div>
        </div>
    )
}

export default Follower;