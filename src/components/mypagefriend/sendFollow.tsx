import { BiSearch } from "react-icons/bi";
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
                <RoundBtn label="요청" color="bg-lightgrey" px={10} />
                <RoundBtn label="차단" color="bg-lightgrey" px={10} />
            </div>
        </div>
    )
}

function SendFollow () {
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
        <div className="h-req-box-height bg-brightgrey p-7 m-2.5 rounded-lg">
            <div>
                <div className="text-3xl font-bold">
                    친구 요청 보내기
                </div>
                <div className="flex flex-col justify-center mt-12">
                    <input 
                        className="border border-lightgrey rounded-lg h-12 p-4"
                        type="text" 
                        placeholder="친구가 되고 싶은 닉네임, 전화번호를 입력하세요"
                    />
                    <BiSearch   
                        size={24}
                        className='absolute self-end mr-5 hover:cursor-pointer'
                    />
                </div>
                <div className="mt-6">
                    {friends.map((friend, index) => (
                        <Friend key={index} name={friend} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SendFollow;