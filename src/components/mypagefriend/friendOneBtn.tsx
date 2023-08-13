import RoundBtn from '../layout/roundBtn';
import React from 'react';

interface FriendProps {
    name: string;
    label1: string;
    label2?: string;
    px?: number;
    onClick?: any;
}

function FriendOneBtn(props: FriendProps) {
    // 친구 프사 + 닉네임 + 버튼
    return (
        <div className='flex my-4 justify-between mr-2'>
            <div className='flex items-center'>
                <img
                    className='mr-5'
                    src='/images/user.svg'
                    alt='친구 프로필사진'
                />
                {props.name}
            </div>
            <div className='flex'>
                <RoundBtn
                    label={`${props.label1}`}
                    color='bg-lightgrey'
                    px={props.px}
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
}

export default FriendOneBtn;
