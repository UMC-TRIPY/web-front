'use client';
import LabelSchedules from '../../components/detailschedule/LabelSchedules';
import FriendList from '../../components/detailschedule/FriendList';
import OtherSchedule from '../../components/detailschedule/OtherSchedule';
import CommonHeader from '../../components/detailschedule/CommonHeader';

interface IscheduleItem {
    lineColor: string;
    color: string;
    time: number;
    hour: number;
    title: string;
    location?: string;
}

const dummySchedule: IscheduleItem[] = [
    {
        lineColor: '#FF7F57',
        color: '#FFF3EF',
        time: 7,
        hour: 2,
        title: '자차로 이동'
    },
    {
        lineColor: '#FF7F57',
        color: '#FFF3EF',
        time: 11,
        hour: 3,
        title: '자고싶다'
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
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-dashed border-gray-200'></div>
                );
            } else {
                // 30 ~ 00
                times.push(
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-gray-200'></div>
                );
            }
        }

        for (let schedule of item) {
            console.log(schedule);
            let { lineColor, color, time, hour, title, location } = schedule;

            times.splice(
                time,
                hour,
                <div
                    className='flex w-[22rem] pl-3 border-l-4'
                    style={{
                        height: `calc(1.75rem * ${hour})`,
                        borderLeftColor: lineColor,
                        backgroundColor: color
                    }}
                >
                    <span>{}</span>
                    <span>{title}</span>
                    <span>{location}</span>
                </div>
            );
        }

        // console.log(times);

        return times;
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
                <div>{renderDateTable('6/30 (금)', dummySchedule)}</div>
                <div>
                    <div>{renderDateTable('7/1 (토)', dummySchedule)}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)', dummySchedule)}</div>
                </div>
                {/* <div
                    className='absolute top-[1.75rem] left-[4.5rem] bg-slate-700 opacity-50'
                    style={{
                        width: 'calc(100% - 4.5rem)',
                        height: 'calc(100% - 1.75rem)'
                    }}
                ></div> */}
            </div>
        </div>
    );
}
