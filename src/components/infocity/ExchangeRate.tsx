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
        // const currenyKey = process.env.NEXT_PUBLIC_EXCHANGE_KEY;
        const today = new Date();
        let date;
        const loc = today.toString().indexOf(':');
        const time = Number(today.toString().substring(loc - 2, loc));
        if (today.getDay() === 6) {
            date = new Date(today.setDate(today.getDate() - 1));
        } else if (today.getDay() === 0) {
            date = new Date(today.setDate(today.getDate() - 2));
        } else if (time < 11) {
            date = new Date(today.setDate(today.getDate() - 1));
        } else {
            date = today;
        }
        const year = date.getFullYear().toString();
        const tempMonth = (date.getMonth() + 1).toString();
        const month = tempMonth.length === 1 ? '0' + tempMonth : tempMonth;
        const day = date.getDate().toString();
        const dateValue = `${year}${month}${day}`;
        axios
            .get(
                `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${currencyKey}&searchdate=${dateValue}&data=AP01`
            )
            .then((res) => {
                const datas = [...res.data];
                // 여행페이지에 해당하는 국가 외화 includes 안에 넣어주기
                const tempCurrency = datas.filter((data) =>
                    data.cur_unit.includes('JPY')
                );
                // 외화 표기에 100 표시 있으면 100으로 나눠줌
                const other = tempCurrency[0].cur_unit.includes('(100)')
                    ? Number(tempCurrency[0].kftc_bkpr) / 100
                    : Number(tempCurrency[0].kftc_bkpr);
                setCur(1 / other);
                console.log('환율 정보 : ' + 1 / other);
            })
            .catch((err) => console.log(err));
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

    const len =
        currencyKo.split(' ').length === 2
            ? currencyKo.split(' ')[0].length + 1
            : currencyKo.split(' ')[0].length;
    const pd = 25 + 16 * (len - 1);
    const mg = 310 - 16 * (len - 1);

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
                            ? 'flex flex-col justify-center text-right border border-lightgrey rounded-r w-60'
                            : 'flex flex-col justify-center text-right border border-lightgrey rounded-r w-60'
                    }
                    style={{
                        paddingRight:
                            before === '' ? '12px' : isWon ? '25px' : `${pd}px`
                    }}
                    type='text'
                    placeholder='숫자를 입력해주세요.'
                    value={before}
                    onChange={onChange}
                    maxLength={15} // 1000조 이하까지 계산
                />
                <div
                    className={
                        before === '' ? 'hidden' : 'self-center absolute'
                    }
                    style={{
                        marginLeft:
                            before === '' ? '0px' : isWon ? '310px' : `${mg}px`
                    }}
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
