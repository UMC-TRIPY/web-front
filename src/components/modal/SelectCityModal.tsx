import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';
import { useSetRecoilState } from 'recoil';
import { planIDState } from '@/states/schedule';

type Props = {
    lists: string[];
    top: string;
    left: string;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    setList: React.Dispatch<React.SetStateAction<string>>;
    setNext: React.Dispatch<React.SetStateAction<string[]>>;
};

const asiaList = ['일본'];
const europeList = ['영국', '스페인'];
const oceaniaList = ['호주'];

const japanList = ['도쿄', '오사카'];
const ukList = ['런던'];
const spainList = ['바르셀로나'];
const australiaList = ['시드니'];

export default function SelectCityModal({
    lists,
    top,
    left,
    setModalState,
    setList,
    setNext
}: Props) {
    const setPlanID = useSetRecoilState(planIDState);
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    });
    const select = (list: string) => {
        setList(list);
        setModalState(false);
        if (list === '아시아') {
            setNext(asiaList);
        } else if (list === '유럽') {
            setNext(europeList);
        } else if (list === '오세아니아') {
            setNext(oceaniaList);
        } else if (list === '일본') {
            setNext(japanList);
        } else if (list === '영국') {
            setNext(ukList);
        } else if (list === '스페인') {
            setNext(spainList);
        } else if (list === '호주') {
            setNext(australiaList);
        }
    };
    return (
        <Portal selector='#body'>
            <div>
                <div
                    className='absolute top-0 left-0 w-screen h-screen'
                    onClick={() => {
                        setModalState(false);
                    }}
                ></div>
                <div className={`absolute min-w-[368px] ${top}`}>
                    {lists.map((list: string, idx: number) => (
                        <div
                            className={`relative flex flex-col rounded-lg max-h-56 bg-white z-101 shadow-md w-full ${left}`}
                            key={`${list}container${idx}`}
                        >
                            <div
                                key={`${list}${idx}`}
                                className='flex py-4 px-8 border-y border-morelightgrey cursor-pointer'
                                onClick={() => {
                                    select(list);
                                }}
                            >
                                {list}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Portal>
    );
}
