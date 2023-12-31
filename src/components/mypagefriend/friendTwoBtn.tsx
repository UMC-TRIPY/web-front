import RoundBtn from '../layout/roundBtn';
import React from 'react';
import Image from 'next/image';

interface FriendProps {
    name: string;
    label1: string;
    label2?: string;
    px?: number;
    onClick1?: any;
    onClick2?: any;
}

function FriendTwoBtn(props: FriendProps) {
    // 친구 프사 + 닉네임 + 버튼
    return (
        <div className='flex my-4 justify-between mr-2'>
            <div className='flex items-center'>
                <Image
                    className='mr-5'
                    src='/images/user.svg'
                    alt='친구 프로필사진'
                    width={30}
                    height={30}
                />
                {props.name}
            </div>
            <div className='flex'>
                <RoundBtn
                    label={`${props.label1}`}
                    color='bg-lightgrey'
                    px={props.px}
                    onClick={props.onClick1}
                />
                <RoundBtn
                    label={`${props.label2}`}
                    color='bg-lightgrey'
                    px={props.px}
                    onClick={props.onClick2}
                />
            </div>
        </div>
    );
}

export default FriendTwoBtn;
