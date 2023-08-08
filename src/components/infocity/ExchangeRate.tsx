import React, { useEffect, useState } from 'react';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import axios from 'axios';

export default function ExchangeRate({
    currencyKo,
    currencyEn,
    country
}: {
    currencyKo: string;
    currencyEn: string;
    country: string;
}) {
    const [cur, setCur] = useState<number>(0);
    const currencyKey = process.env.NEXT_PUBLIC_EXCHANGE_KEY;
    useEffect(() => {
        axios
            .get(`http://data.fixer.io/api/latest?access_key=${currencyKey}`)
            .then((res) => {
                console.log(res);
                const ko = res.data.rates.KRW;
                const otherName = Object.keys(res.data.rates);
                const otherValue = Object.values(res.data.rates);
                let other: any;
                otherName.filter((cur, idx) => {
                    if (cur === currencyEn) other = otherValue[idx];
                });
                setCur(other / ko);
                console.log('환율 정보 : ' + other / ko);
            })
            .catch((err) => console.log(err));
    }, []);

    const [before, setBefore] = useState<string>('');
    const [after, setAfter] = useState<string>(before);
    const [isWon, setIsWon] = useState<boolean>(true);

    // 한국 돈 => 외국 돈
    const wonToOther = (inputValue: string) => {
        let change = (Number(inputValue) * cur).toFixed(2);
        let won = Number(
            change.substring(0, change.indexOf('.'))
        ).toLocaleString();
        let other = change.substring(change.indexOf('.'), change.length);
        return won + other;
    };

    // 외국 돈 => 한국 돈
    const otherToWon = (inputValue: string) => {
        return Number((Number(inputValue) / cur).toFixed(0)).toLocaleString();
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
            <div className='flex'>
                <div className='flex flex-col justify-center text-center bg-lightgrey text-darkgrey rounded-l w-24 h-16'>
                    <div>{isWon ? '대한민국' : country}</div>
                    <div>{isWon ? 'KRW' : currencyEn}</div>
                </div>
                <input
                    className={
                        before === ''
                            ? 'flex flex-col justify-center text-right border border-lightgrey rounded-r w-60 px-3'
                            : 'flex flex-col justify-center text-right border border-lightgrey rounded-r w-60 px-[25px]'
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
                    {isWon ? '원' : currencyKo}
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
                    <div>{isWon ? country : '대한민국'}</div>
                    <div>{isWon ? currencyEn : 'KRW'}</div>
                </div>
                <div className='flex flex-col justify-center text-right border border-lightgrey rounded-r w-60 px-3'>
                    {before === '' ? 0 : after}
                    {isWon ? currencyKo : '원'}
                </div>
            </div>
        </div>
    );
}
