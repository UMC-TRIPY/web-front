import { useState, useCallback, useEffect } from 'react';
import IScheduleItem from '@/models/interface/IScheduleItem';
import { add, differenceInDays } from 'date-fns';
import StaticScheduleBlock from './StaticScheduleBlock';
import { checkSchedules } from '@/apis/travellists/check';

export default function BlockSchedule() {
    const color = ['#FFE457', '#57CDFF', '#FF7F57'];
    const lightColor = ['#FFFBE7', '#EEFAFF', '#FFF3EF'];
    const [start, setStart] = useState<any>();
    const [differ, setDiffer] = useState<any>();
    const [schedules, setSchedules] = useState<any>();
    const [totalSchedules, setTotalSchedules] = useState<any>();
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
    console.log(totalSchedules);
    useEffect(() => {
        let tmp: any[] = [];
        let totalTmp: any[] = [];
        const date: any =
            typeof window! == 'undefined'
                ? sessionStorage.getItem('date')?.split('~')
                : null;
        const s = date[0];
        const e = date[1].split(' ')[1];
        setStart(new Date(s));
        setDiffer(differenceInDays(new Date(e), new Date(s)) + 1);
        checkSchedules(
            Number(
                typeof window! == 'undefined'
                    ? sessionStorage.getItem('pid')
                    : null
            )
        )
            .then((res) => {
                console.log(res);
                res.map((r: any, idx: number) => {
                    tmp.push({
                        id: idx + 1,
                        column: differenceInDays(
                            new Date(r.plan_date.slice(0, 10)),
                            new Date(s)
                        ),
                        lineColor: color[Number(r.plan_lineColor) - 1],
                        color: lightColor[Number(r.plan_color) - 1],
                        startTime: Number(r.start_time.slice(6)),
                        halfHour: r.plan_halfHour,
                        title: r.plan_title
                    });
                    // 상세 일정 보기 모달에 사용할 데이터들
                    totalTmp.push({
                        plan_date: r.plan_date === undefined ? '' : r.plan_date,
                        plan_color:
                            r.plan_color === undefined ? '' : r.plan_color,
                        plan_lineColor:
                            r.plan_lineColor === undefined
                                ? ''
                                : r.plan_lineColor,
                        plan_title:
                            r.plan_title === undefined ? '' : r.plan_title,
                        plan_column:
                            r.plan_column === undefined ? '' : r.plan_column,
                        start_time:
                            r.start_time === undefined ? '' : r.start_time,
                        plan_halfHour:
                            r.plan_halfHour === undefined
                                ? ''
                                : r.plan_halfHour,
                        plan_place:
                            r.plan_place === undefined ? '' : r.plan_place,
                        plan_budget:
                            r.plan_budget === undefined ? '' : r.plan_budget,
                        plan_memo: r.plan_memo === undefined ? '' : r.plan_memo,
                        plan_image:
                            r.plan_image === undefined ? '' : r.plan_image,
                        plan_file: r.plan_file === undefined ? '' : r.plan_file
                    });
                });
                setSchedules(tmp);
                setTotalSchedules(totalTmp);
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(schedules);
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
                {schedules === undefined
                    ? ''
                    : schedules.map((item: any, idx: number) =>
                          renderScheduleBlock(item, idx)
                      )}
            </div>
        </div>
    );
}
