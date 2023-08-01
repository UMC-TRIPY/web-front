import IScheduleItem from '@/models/interface/IScheduleItem';
import {
    dateTotable,
    compareDate,
    formatAMPM,
    tableToDate
} from '@/utils/dateUtil';
import React from 'react';
// import { useDrag, useDrop } from 'react-dnd';

type Props = {
    item: IScheduleItem;
    handleDragBlock: (id: number) => void;
};

const ScheduleBlock = (props: Props) => {
    const {
        id,
        column,
        lineColor,
        color,
        startTime,
        halfHour,
        title,
        location
    } = props.item;
    // const minutes = compareDate(startTime, endTime);

    const dragFunction = (event, type) => {
        // event.preventDefault();
        // event.stopPropgation();
        console.log(type);
    };

    return (
        <div
            id={id.toString()}
            className='absolute w-[20rem] p-3 border-l-4'
            style={{
                top: `calc(1.75rem * ${startTime})`,
                left: `calc(22rem * ${column})`,
                height: `calc(1.75rem * ${halfHour})`,
                borderLeftColor: lineColor,
                backgroundColor: color
            }}
            draggable
            onDragStart={() => props.handleDragBlock(id)}
            onDragEnter={(event) => dragFunction(event, 'enter')}
            onDragLeave={(event) => dragFunction(event, 'leave')}
        >
            <span className='text-xs'>
                {formatAMPM(tableToDate(startTime))} ~{' '}
                {formatAMPM(tableToDate(startTime + halfHour))}
            </span>
            <br />
            <span>{title}</span>
            <span>{location}</span>
        </div>
    );
};

export default ScheduleBlock;
