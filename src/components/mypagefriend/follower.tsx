import RoundBtn from "../layout/roundBtn";
import React from "react";

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
                <RoundBtn label="수락" color="bg-lightgrey" px={10}/>
                <RoundBtn label="거절" color="bg-lightgrey" px={10}/>
            </div>
        </div>
    )
}

function Follower () {
    return (
        <div className="h-req-half-height bg-brightgrey p-7 m-2.5 mt-5 rounded-lg">
            <div className="text-3xl font-bold">
                친구 요청
            </div>
            <div className="mt-12">
                <Friend name="유저닉네임10글자자" />
                <Friend name="유저닉네임10글자자" />
                <Friend name="유저닉네임10글자자" />
                <Friend name="유저닉네임10글자자" />
            </div>
        </div>
    )
}

export default Follower;