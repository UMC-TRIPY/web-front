'use client';
import LabelSchedules from '../../components/detailschedule/LabelSchedules';
import FriendList from '../../components/detailschedule/FriendList';
import OtherSchedule from '../../components/detailschedule/OtherSchedule';
import CommonHeader from '../../components/detailschedule/CommonHeader';
import IScheduleItem from '@/models/interface/IScheduleItem';
import ScheduleBlock from '@/components/scheduleblock/ScheduleBlock';
import { useCallback, useState } from 'react';
import { dateTotable } from '@/utils/dateUtil';

/**
 * Todo
 * 1. 스케쥴 블록 제한사항 걸기
 * 2. 스케쥴 블록 이동할곳 미리보기?
 * 3. 스케쥴 블록 마우스 포인터 맞추기
 * 4. 코드 리팩토링 필요
 */

export default function Updateschedule() {
    const [schedule, setSchedule] = useState<IScheduleItem[]>([
        // 몇번째 칸인지도 넣기?
        {
            id: 1,
            column: 0,
            lineColor: '#FF7F57',
            color: '#FFF3EF',
            startTime: dateTotable(new Date('2023-07-25 10:00:00')),
            halfHour: 4,
            // endTime: new Date('2023-07-25 12:00:00'),
            title: '자차로 이동'
        },
        {
            id: 2,
            column: 0,
            lineColor: '#FF7F57',
            color: '#FFF3EF',
            startTime: dateTotable(new Date('2023-07-25 14:30:00')),
            halfHour: 10,
            // endTime: new Date('2023-07-25 19:00:00'),
            title: '자고싶다'
        },
        {
            id: 3,
            column: 0,
            lineColor: '#FF7F57',
            color: '#FFF3EF',
            startTime: dateTotable(new Date('2023-07-25 20:00:00')),
            halfHour: 5,
            // endTime: new Date('2023-07-25 21:00:00'),
            title: '변경사항 왜 적용안돼'
        },
        {
            id: 4,
            column: 1,
            lineColor: '#FF7F57',
            color: '#FFF3EF',
            startTime: dateTotable(new Date('2023-07-25 10:00:00')),
            halfHour: 10,
            // endTime: new Date('2023-07-25 21:00:00'),
            title: '변경사항 왜 적용안돼'
        }
    ]);
    const [currentDraggingBlockId, setCurrentDraggingBlockId] =
        useState<number>(null);
    // id값으로 찾아서 변경
    // drag and drop
    const dragFunction = (event, type) => {
        event.preventDefault();
        console.log(type);
    };

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
    const renderEmptyBlock = () => {
        const blocks = [];
        // column
        for (let i = 0; i < 5; i += 1) {
            for (let j = 0; j < 34; j++) {
                blocks.push(
                    <div
                        className='absolute w-[22rem] h-7'
                        style={{
                            top: `calc(1.75rem * ${j})`,
                            left: `calc(22rem * ${i})`
                        }}
                        onDragEnter={(e) => dragFunction(e, 'enter')}
                        onDragOver={(e) => {
                            return dragFunction(e, 'over');
                        }}
                        onDrop={() => handleBlockDrop(i, j)}
                    >
                        {j}
                    </div>
                );
            }
        }
        return blocks;
    };

    const renderScheduleBlock = useCallback(
        (schedule: IScheduleItem, index: number) => {
            return (
                <ScheduleBlock
                    item={schedule}
                    handleDragBlock={handleDragBlock}
                />
            );
        },
        []
    );

    // drag
    const handleDragBlock = (id: number) => {
        setCurrentDraggingBlockId(id);
    };

    const handleBlockDrop = (column: number, row: number) => {
        console.log('drop');
        console.log(column, row);
        console.log(currentDraggingBlockId);
        // const selectedObject = schedule.find(
        //     (obj) => obj.id === currentDraggingBlockId
        // );

        // console.log(selectedObject);
        setSchedule((prev) => {
            const newSchedule = [...prev];
            const selectedObject = newSchedule.find(
                (obj) => obj.id === currentDraggingBlockId
            );
            selectedObject!.column = column;
            selectedObject!.startTime = row;
            return newSchedule;
        });
    };

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
                    <div>{renderDateTable('6/30 (금)', schedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/1 (토)', schedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', schedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', schedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', schedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', schedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', schedule)}</div>
                </div>
                <div
                    className='absolute top-[1.75rem] left-[4.5rem] bottom-0 right-0'
                    style={{
                        width: `calc((22rem * 7))`,
                        height: 'calc(100% - 1.75rem)'
                    }}
                >
                    {renderEmptyBlock()}
                    {schedule.map((item: IScheduleItem, idx: number) =>
                        renderScheduleBlock(item, idx)
                    )}
                </div>
            </div>
        </div>
    );
}
