import IscheduleItem from '@/models/interface/IscheduleItem';
import { dateTotable, compareDate, formatAMPM } from '@/utils/dateUtil';
import React from 'react';

type Props = {
    item: IscheduleItem;
};

const ScheduleBlock = (props: Props) => {
    const { lineColor, color, startTime, endTime, title, location } =
        props.item;
    const minutes = compareDate(startTime, endTime);

    return (
        <div
            className='absolute w-[20rem] p-3 border-l-4'
            style={{
                top: `calc(1.75rem * ${dateTotable(startTime) - 1})`,
                height: `calc(1.75rem * ${minutes})`,
                borderLeftColor: lineColor,
                backgroundColor: color
            }}
        >
            <span className='text-xs'>
                {formatAMPM(startTime)} ~ {formatAMPM(endTime)}
            </span>
            <br />
            <span>{title}</span>
            <span>{location}</span>
        </div>
    );
};

export default ScheduleBlock;
