import React, { useState } from 'react';
import { LiaExchangeAltSolid } from 'react-icons/lia';

export default function ExchangeRate() {
    const [before, setBefore] = useState<string>('');
    const [after, setAfter] = useState<string>(before);
    const [isWon, setIsWon] = useState<boolean>(true);

    // 한국 돈 => 외국 돈
    const wonToOther = (inputValue: string) => {
        let temp = (Number(inputValue) / 9.21).toFixed(2);
        let a = Number(temp.substring(0, temp.indexOf('.'))).toLocaleString();
        let b = temp.substring(temp.indexOf('.'), temp.length);
        return a + b;
    };

    // 외국 돈 => 한국 돈
    const otherToWon = (inputValue: string) => {
        return Number((Number(inputValue) * 9.21).toFixed(0)).toLocaleString();
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
        // 문자열에서 콤마 제거
        inputValue.replace(/,/g, '');
        const temp = Number(inputValue).toLocaleString();
        setBefore(temp);
        const send = isWon ? wonToOther(inputValue) : otherToWon(inputValue);
        setAfter(send);
    };
    return (
        <div className='flex justify-between items-center mt-3'>
            {/* 환율 api 연동 해야합니다 */}
            <div className='flex'>
                <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                    <div>{isWon ? '대한민국' : '일본'}</div>
                    <div>{isWon ? 'KRW' : 'JPY'}</div>
                </div>
                <input
                    className={
                        before === ''
                            ? 'flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-3'
                            : 'flex flex-col justify-center text-center text-right border border-lightgrey rounded-r w-60 px-[25px]'
                    }
                    type='text'
                    placeholder='숫자를 입력해주세요.'
                    value={before}
                    onChange={onChange}
                    maxLength={15} // 1000조 이하까지 계산
                />
                <div
                    className={
                        before === ''
                            ? 'hidden'
                            : 'self-center absolute ml-[310px]'
                    }
                >
                    {isWon ? '원' : '엔'}
                </div>
            </div>
            <LiaExchangeAltSolid
                className='hover:cursor-pointer'
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
                    {before === '' ? 0 : after}
                    {isWon ? '엔' : '원'}
                </div>
            </div>
        </div>
    );
}
