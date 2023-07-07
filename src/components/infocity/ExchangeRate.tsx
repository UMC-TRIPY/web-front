import React, { useState } from 'react';
import { LiaExchangeAltSolid } from 'react-icons/lia';

export default function ExchangeRate() {
    const [before, setBefore] = useState<string>('');
    const [after, setAfter] = useState<string>(before);
    const [isWon, setIsWon] = useState<boolean>(true);
    return (
        <div className='flex justify-between items-center mt-3'>
            {/* 환율 api 연동 해야합니다, input에 숫자만 입력하는 방법 찾아보는 중 입니다*/}
            <div className='flex'>
                <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                    <div>{isWon ? '대한민국' : '일본'}</div>
                    <div>{isWon ? 'KRW' : 'JPY'}</div>
                </div>
                <input
                    className='flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'
                    type='text'
                    placeholder='숫자를 입력해주세요.'
                    value={before}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setBefore(e.target.value);
                    }}
                />
            </div>
            <LiaExchangeAltSolid
                size={28}
                onClick={() => {
                    setIsWon(!isWon);
                    setBefore('');
                    setAfter('');
                }}
            />
            <div className='flex'>
                <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                    <div>{isWon ? '일본' : '대한민국'}</div>
                    <div>{isWon ? 'JPY' : 'KRW'}</div>
                </div>
                <div className='flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'>
                    {after}
                </div>
            </div>
        </div>
    );
}
