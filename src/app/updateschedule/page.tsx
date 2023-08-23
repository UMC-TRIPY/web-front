'use client';
import FriendList from '../../components/detailschedule/FriendList';
import OtherSchedule from '../../components/detailschedule/OtherSchedule';
import CommonHeader from '../../components/detailschedule/CommonHeader';
import IScheduleItem from '@/models/interface/IScheduleItem';
import ScheduleBlock from '@/components/scheduleblock/ScheduleBlock';
import { useCallback, useEffect, useState } from 'react';
import { dateTotable } from '@/utils/dateUtil';
import { useRouter } from 'next/navigation';
import ScheduleTable from '@/components/scheduleTable/ScheduleTable';
import { getScheduleData } from '@/apis/travellists/update';
import { differenceInDays } from 'date-fns';
import { getFriendList, getInvitedFriendList } from '@/apis/user/friend';
import { useRecoilValue } from 'recoil';
import { planIDState } from '@/states/schedule';
import { InvitedFriend, ISchedule } from '@/types/user';

/**
 * Todo
 * 1. 스케줄 테이블 옮기기
 * 2. 테이블 안의 유저 정보 받고 변경
 * 4. 코드 리팩토링 필요
 */

export default function Updateschedule() {
    const color = ['#FFE457', '#57CDFF', '#FF7F57'];
    const lightColor = ['#FFFBE7', '#EEFAFF', '#FFF3EF'];
    const pid = Number(sessionStorage.getItem('pid'));
    const router = useRouter();
    const [schedule, setSchedule] = useState<IScheduleItem[]>([
        // {
        //     id: 1,
        //     column: 0,
        //     lineColor: '#57CDFF',
        //     color: '#EEFAFF',
        //     startTime: dateTotable(new Date('2023-07-25 10:00:00')),
        //     halfHour: 4,
        //     title: '자차로 이동'
        // },
        // {
        //     id: 2,
        //     column: 0,
        //     lineColor: '#78CAFA',
        //     color: '#EEFAFF',
        //     startTime: 10,
        //     halfHour: 10,
        //     title: '점심먹기'
        // },
        // {
        //     id: 4,
        //     column: 1,
        //     lineColor: '#FF7F57',
        //     color: '#FFF3EF',
        //     startTime: dateTotable(new Date('2023-07-25 10:00:00')),
        //     halfHour: 10,
        //     title: '운동하기',
        //     location: '서울시 강남구'
        // }
    ]);
    const [currentDraggingBlockId, setCurrentDraggingBlockId] = useState<
        number | null
    >(null);
    // id값으로 찾아서 변경
    // drag and drop

    // 0: 빈 공간, 1: 들어갈 공간, 2: 들어갈 수 없는 공간
    const [emptyBlockList, setEmptyBlockList] = useState<number[][]>([]);

    const dragFunction = (event: any, type: any) => {
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

    const renderDateTable = (date: string, item: IScheduleItem[]) => {
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
        for (let i = 0; i < emptyBlockList.length; i += 1) {
            for (let j = 0; j < emptyBlockList[i].length; j++) {
                blocks.push(
                    <div
                        className={
                            emptyBlockList[i][j] == 1
                                ? 'absolute w-[22rem] h-7 bg-gray-300'
                                : emptyBlockList[i][j] == 2
                                ? 'absolute w-[22rem] h-7 bg-red-300'
                                : 'absolute w-[22rem] h-7'
                        }
                        style={{
                            top: `calc(1.75rem * ${j})`,
                            left: `calc(22rem * ${i})`
                        }}
                        onDragEnter={(e) => handleBlockEnter(i, j)}
                        onDragOver={(e) => {
                            return dragFunction(e, 'over');
                        }}
                        onDrop={() => handleBlockDrop(i, j)}
                    ></div>
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
                    resetEmptyBlockList={resetEmptyBlockList}
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
        resetEmptyBlockList();

        setSchedule((prev) => {
            const newSchedule = [...prev];
            const selectedObject = newSchedule.find(
                (obj) => obj.id === currentDraggingBlockId
            );
            if (row + selectedObject!.halfHour <= 34) {
                selectedObject!.column = column;
                selectedObject!.startTime = row;
            }
            return newSchedule;
        });
    };

    const handleBlockEnter = (column: number, row: number) => {
        // 블록이 들어가는곳을 미리 보기로 알려줌
        resetEmptyBlockList();
        setEmptyBlockList((prev) => {
            const newEmptyBlockList = [...prev];
            const selectedObject = schedule.find(
                (obj) => obj.id === currentDraggingBlockId
            );
            for (let i = 0; i < selectedObject!.halfHour; i++) {
                if (row + i >= 34) {
                    newEmptyBlockList[column][row + i] = 2;
                } else {
                    newEmptyBlockList[column][row + i] = 1;
                }
            }
            return newEmptyBlockList;
        });
    };

    const resetEmptyBlockList = () => {
        const emptyBlockList = [];
        for (let i = 0; i < 5; i++) {
            const emptyBlocks = [];
            for (let j = 0; j < 34; j++) {
                emptyBlocks.push(0);
            }
            emptyBlockList.push(emptyBlocks);
        }
        setEmptyBlockList(emptyBlockList);
    };

    useEffect(() => {
        const schedules: IScheduleItem[] = [];
        const date: any = sessionStorage.getItem('date')?.split('~');
        const startDate = date[0];
        resetEmptyBlockList();
        console.log(pid);
        getScheduleData(pid).then((res) => {
            res.data.map((item: any, idx: number) => {
                schedules.push({
                    id: idx + 1,
                    column: differenceInDays(
                        new Date(item.plan_date.slice(0, 10)),
                        new Date(startDate)
                    ),
                    lineColor: color[Number(item.plan_lineColor) - 1],
                    color: lightColor[Number(item.plan_color) - 1],
                    startTime: Number(item.start_time.slice(6)),
                    halfHour: item.plan_halfHour,
                    title: item.plan_title
                });
            });
            setSchedule(schedules);
        });
    }, []);

    const planID = useRecoilValue(planIDState);
    const [invitedFriendList, setInvitedFriendList] = useState<InvitedFriend[]>(
        []
    );

    useEffect(() => {
        if (planID !== -1) {
            getInvitedFriendList(planID).then((data) => {
                console.log('invitedFriendList:', data);
                setInvitedFriendList(data);
            });
        }
    }, [planID]);

    return (
        <div className='mt-20 py-20'>
            {/* 공통 머리글 */}
            <CommonHeader />
            {/* 다른 일정 선택 */}
            <OtherSchedule
                href='schedulemain'
                register={false}
                top='top-[545px]'
            />
            {/* 친구 목록 */}
            <FriendList friends={invitedFriendList} edit={true} />
            {/* 여행 일정 */}
            <ScheduleTable schedule={schedule} setSchedule={setSchedule} />
            <div className='flex justify-center'>
                <button
                    className='mt-24 py-3 px-11 bg-primary rounded'
                    onClick={() => router.push('/schedule')}
                >
                    변경사항 저장
                </button>
            </div>
        </div>
    );
}
