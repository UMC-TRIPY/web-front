import IScheduleItem from '@/models/interface/IScheduleItem';
import { formatAMPM, tableToDate } from '@/utils/dateUtil';
import React from 'react';
import Image from 'next/image';

type Props = {
    item: IScheduleItem;
};

const StaticScheduleBlock = (props: Props) => {
    const { column, lineColor, color, startTime, halfHour, title, location } =
        props.item;

    return (
        <div
            className='absolute w-[20rem] p-3 border-l-4'
            style={{
                top: `calc(1.75rem * ${startTime})`,
                left: `calc(22rem * ${column})`,
                height: `calc(1.75rem * ${halfHour})`,
                backgroundColor: color,
                borderLeftColor: lineColor
            }}
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

export default StaticScheduleBlock;
