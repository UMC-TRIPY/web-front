'use client';
import LabelSchedules from '../../components/detailschedule/LabelSchedules';
import FriendList from '../../components/detailschedule/FriendList';
import OtherSchedule from '../../components/detailschedule/OtherSchedule';
import CommonHeader from '../../components/detailschedule/CommonHeader';

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

    const renderDateTable = (date: string) => {
        const times: React.ReactNode[] = [
            <div
                key='first'
                className='w-[22rem] h-7 text-center border border-l-0 border-gray-200 bg-gray-100'
            >
                {date}
            </div>
        ];

        for (let i = 0; i < 17; i++) {
            times.push(
                <div>
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-dashed border-gray-200'></div>
                    <div className='flex w-[22rem] h-7 border border-t-0 border-l-0 border-gray-200'></div>
                </div>
            );
        }
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
            <div className='flex flex-row'>
                <div>
                    {/* Default */}
                    {renderTimeTable()}
                </div>
                <div>{renderDateTable('6/30 (금)')}</div>
                <div>
                    <div>{renderDateTable('7/1 (토)')}</div>
                </div>
                <div>
                    <div>{renderDateTable('7/2 (일)')}</div>
                </div>
            </div>
        </div>
    );
}
