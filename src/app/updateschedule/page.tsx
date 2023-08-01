'use client';
import LabelSchedules from '../../components/detailschedule/LabelSchedules';
import FriendList from '../../components/detailschedule/FriendList';
import OtherSchedule from '../../components/detailschedule/OtherSchedule';
import CommonHeader from '../../components/detailschedule/CommonHeader';
import IscheduleItem from '@/models/interface/IscheduleItem';
import ScheduleBlock from '@/components/scheduleblock/ScheduleBlock';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCallback } from 'react';

const dummySchedule: IscheduleItem[] = [
    // 몇번째 칸인지도 넣기?
    {
        id: 1,
        lineColor: '#FF7F57',
        color: '#FFF3EF',
        startTime: new Date('2023-07-25 10:00:00'),
        endTime: new Date('2023-07-25 12:00:00'),
        title: '자차로 이동'
    },
    {
        id: 2,
        lineColor: '#FF7F57',
        color: '#FFF3EF',
        startTime: new Date('2023-07-25 14:30:00'),
        endTime: new Date('2023-07-25 19:00:00'),
        title: '자고싶다'
    },
    {
        id: 3,
        lineColor: '#FF7F57',
        color: '#FFF3EF',
        startTime: new Date('2023-07-25 20:00:00'),
        endTime: new Date('2023-07-25 21:00:00'),
        title: '변경사항 왜 적용안돼'
    }
];

export default function updateschedule() {
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

    const renderDateTable = (date: string, item: IscheduleItem[]) => {
        const times: React.ReactNode[] = [
            <div
                key='first'
                className='w-[22rem] h-7 text-center border border-l-0 border-gray-200 bg-gray-100'
            >
                {date}
            </div>
        ];
        for (let i = 1; i < 35; i += 1) {
            if (i % 2 == 1) {
                // 00 ~ 30
                times.push(
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-dashed border-gray-200'>
                        {i}
                    </div>
                );
            } else {
                // 30 ~ 00
                times.push(
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-gray-200'>
                        {i}
                    </div>
                );
            }
        }

        return times;
    };

    const renderScheduleBlock = useCallback(
        (schedule: IscheduleItem, index: number) => {
            return (
                <ScheduleBlock item={schedule} />
            );
        },
        []
    );

    return (
        <div className='mt-20 p-20'>
            {/* 공통 머리글 */}
            <CommonHeader />
            {/* 다른 일정 선택 */}
            <OtherSchedule />
            {/* 친구 목록 */}
            <FriendList />
            {/* 여행 일정 */}
            <div className='relative flex flex-row'>
                <div>
                    {/* Default */}
                    {renderTimeTable()}
                </div>
                <div>
                    <div>{renderDateTable('6/30 (금)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/1 (토)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', dummySchedule)}</div>
                </div>
                {/* <DndProvider backend={HTML5Backend}> */}
                <div
                    className='absolute top-[1.75rem] left-[4.5rem] bottom-0 right-0 bg-slate-700 opacity-50'
                    style={{
                        width: `calc((22rem * 7))`,
                        height: 'calc(100% - 1.75rem)'
                    }}
                >
                    {dummySchedule.map((item: IscheduleItem, idx: number) =>
                        renderScheduleBlock(item, idx)
                    )}
                </div>
                {/* </DndProvider> */}
            </div>
        </div>
    );
}
