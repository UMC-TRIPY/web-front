'use client';
import { useState, useCallback, useEffect } from 'react';
import IScheduleItem from '@/models/interface/IScheduleItem';
import { dateTotable } from '@/utils/dateUtil';
import ScheduleBlock from '@/components/scheduleblock/ScheduleBlock';
import CommonHeader from '@/components/detailschedule/CommonHeader';
import FriendList from '@/components/detailschedule/FriendList';
import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import { add, differenceInDays } from 'date-fns';
import ScheduleAddInnerModal from '@/components/modal/ScheduleAddInnerModal';

const friends: string[] = [];

export default function Page() {
    const [modal, setModal] = useState<boolean>(false);
    const [start, setStart] = useState<any>();
    const [differ, setDiffer] = useState<any>();
    const [scheduleId, setScheduleId] = useState<number>(1);
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

    const [schedule, setSchedule] = useState<IScheduleItem[]>([]);
    const [currentDraggingBlockId, setCurrentDraggingBlockId] = useState<
        number | null
    >(null);
    // id값으로 찾아서 변경
    // drag and drop
    const dragFunction = (event: any, type: any) => {
        event.preventDefault();
        // console.log(type);
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

    const renderDateTable = (
        date: string,
        item: IScheduleItem[],
        idx: number
    ) => {
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
    const renderEmptyBlock = () => {
        const blocks = [];
        // column
        for (let i = 0; i < differ; i += 1) {
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
                        {/* {j} */}
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
    console.log(schedule);

    // drag
    const handleDragBlock = (id: number) => {
        setCurrentDraggingBlockId(id);
    };

    const handleBlockDrop = (column: number, row: number) => {
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
            <OtherSchedule
                href='schedulemain'
                register={true}
                top='top-[0px]'
            />
            {/* 친구 목록 */}
            <FriendList friends={friends} edit={true} />
            {/* 여행 일정 */}
            <div
                className='relative flex overflow-x-scroll cursor-pointer'
                onClick={() => setModal(true)}
            >
                <div>
                    {/* Default */}
                    {renderTimeTable()}
                </div>
                {days.map((day, idx) => {
                    return (
                        <div key={`${day}${idx}container`}>
                            <div key={`${day}${idx}content`}>
                                {renderDateTable(day, schedule, idx)}
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
                    {renderEmptyBlock()}
                    {schedule.map((item: IScheduleItem, idx: number) =>
                        renderScheduleBlock(item, idx)
                    )}
                </div>
            </div>
            {modal && (
                <ScheduleAddInnerModal
                    setIsModal={setModal}
                    departureDate={start}
                    difference={differ}
                    schedule={schedule}
                    setSchedule={setSchedule}
                    scheduleId={scheduleId}
                    setScheduleId={setScheduleId}
                />
            )}
        </div>
    );
}
