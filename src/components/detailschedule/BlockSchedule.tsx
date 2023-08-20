import { useState, useCallback, useEffect } from 'react';
import IScheduleItem from '@/models/interface/IScheduleItem';
import { add, differenceInDays } from 'date-fns';
import StaticScheduleBlock from './StaticScheduleBlock';
import { useRecoilState } from 'recoil';
import { BlockScheduleListState } from '@/states/schedule';

export default function BlockSchedule() {
    const [start, setStart] = useState<any>();
    const [differ, setDiffer] = useState<any>();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const days: null | string[] = [];
    if (differ !== null) {
        for (let i = 0; i < differ; i++) {
            let month =
                new Date(add(new Date(start), { days: i })).getMonth() + 1;
            let date = new Date(add(new Date(start), { days: i })).getDate();
            let weekNum = new Date(add(new Date(start), { days: i })).getDay();
            days.push(`${month}/${date} (${week[weekNum]})`);
        }
    }
    useEffect(() => {
        const date: any = sessionStorage.getItem('date')?.split('~');
        const s = date[0];
        const e = date[1].split(' ')[1];
        setStart(new Date(s));
        setDiffer(differenceInDays(new Date(e), new Date(s)) + 1);
    }, []);

    const schedule = useRecoilState(BlockScheduleListState)[0];

    const renderTimeTable = () => {
        const times: React.ReactNode[] = [
            <div
                key='first'
                className='w-[4.5rem] h-7 border border-gray-200 rounded-tl-lg bg-gray-100'
            ></div>
        ];
        for (let i = 6; i < 13; i++) {
            times.push(
                <div
                    key={i + 'AM'}
                    className='flex w-[4.5rem] h-14 justify-center items-center text-center border border-t-0 border-gray-200'
                >
                    <span>{i} AM</span>
                </div>
            );
        }
        for (let i = 1; i < 11; i++) {
            times.push(
                <div
                    key={i + 'PM'}
                    className='flex w-[4.5rem] h-14 justify-center items-center text-center border border-t-0 border-gray-200'
                >
                    <span>{i} PM</span>
                </div>
            );
        }

        return times;
    };

    const renderDateTable = (date: string, idx: number) => {
        const times: React.ReactNode[] = [
            <div
                key='first'
                className={`w-[22rem] h-7 text-center border border-l-0 border-gray-200 bg-gray-100 ${
                    idx === differ - 1 ? 'rounded-tr-xl' : 'rounded-none'
                }`}
            >
                {date}
            </div>
        ];
        for (let i = 1; i < 35; i += 1) {
            if (i % 2 == 1) {
                // 00 ~ 30
                times.push(
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-dashed border-gray-200'>
                        {/* {i} */}
                    </div>
                );
            } else {
                // 30 ~ 00
                times.push(
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-gray-200'>
                        {/* {i} */}
                    </div>
                );
            }
        }

        return times;
    };
    const renderScheduleBlock = useCallback(
        (schedule: IScheduleItem, index: number) => {
            return <StaticScheduleBlock item={schedule} />;
        },
        []
    );

    // drag
    return (
        <div className='relative flex overflow-x-scroll'>
            <div>
                {/* Default */}
                {renderTimeTable()}
            </div>
            {days.map((day, idx) => {
                return (
                    <div key={`${day}${idx}container`}>
                        <div key={`${day}${idx}content`}>
                            {renderDateTable(day, idx)}
                        </div>
                    </div>
                );
            })}
            <div
                className='absolute top-[1.75rem] left-[4.5rem] bottom-0 right-0'
                style={{
                    width: `calc((22rem * ${differ}))`,
                    height: 'calc(100% - 1.75rem)'
                }}
            >
                {schedule.map((item: any, idx: number) =>
                    renderScheduleBlock(item, idx)
                )}
            </div>
        </div>
    );
}
