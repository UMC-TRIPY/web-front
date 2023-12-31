import IScheduleItem from '@/models/interface/IScheduleItem';
import {
    dateTotable,
    compareDate,
    formatAMPM,
    tableToDate
} from '@/utils/dateUtil';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
    item: IScheduleItem;
    handleDragBlock: (id: number) => void;
    resetEmptyBlockList: Function;
};

const ScheduleBlock = (props: Props) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const colors = ['#FFE457', '#57CDFF', '#FF7F57'];
    const lineColors = ['#FFFBE7', '#EEFAFF', '#FFF3EF'];
    let { id, column, lineColor, color, startTime, halfHour, title, location } =
        props.item;

    // lineColor = lineColors[Number(lineColor)];
    // color = colors[Number(color)];

    const dragFunction = (event: any, type: any) => {
        event.preventDefault();
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
            onDragStart={() => {
                props.handleDragBlock(id);
                setIsDragging(true);
            }}
            onDragEnd={() => setIsDragging(false)}
            onDragEnter={(event) => props.resetEmptyBlockList()}
            onDragLeave={(event) => props.resetEmptyBlockList()}
        >
            <span className='text-xs'>
                {formatAMPM(tableToDate(startTime))} ~{' '}
                {formatAMPM(tableToDate(startTime + halfHour))}
            </span>
            <br />
            <span>{title}</span>

            {location && (
                <div className='absolute flex flex-row right-4 bottom-4'>
                    <Image
                        className='flex mr-1'
                        src='/images/mapPin.svg'
                        width={15}
                        height={15}
                        alt='map-pin'
                    />
                    <span className='flex text-xs'>{location}</span>
                </div>
            )}
        </div>
    );
};

export default ScheduleBlock;
