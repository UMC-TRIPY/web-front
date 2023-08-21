import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';

type Props = {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    schedules: {
        id: number;
        dates: string;
        places: string;
    }[];
    setDate: any;
    setPlace: any;
    top: string;
};

export default function SelectScheduleModal({
    setModalState,
    schedules,
    setDate,
    setPlace,
    top
}: Props) {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    });
    return (
        <Portal selector='#body'>
            <div>
                <div
                    className='absolute top-0 left-0 w-screen h-screen'
                    onClick={() => {
                        setModalState(false);
                    }}
                ></div>
                <div
                    className={`absolute flex flex-col rounded-lg max-h-56 bg-white z-101 shadow-md max-w-[653px] min-w-[656px] ${top} ${
                        schedules.length > 4
                            ? 'overflow-y-scroll'
                            : 'overflow-y-hidden'
                    }`}
                >
                    {schedules.map(
                        (
                            schedule: {
                                id: number;
                                dates: string;
                                places: string;
                            },
                            idx: number
                        ) => (
                            <div
                                key={`schedule${idx}`}
                                className='flex py-4 px-8 border-y border-morelightgrey cursor-pointer'
                                onClick={() => {
                                    sessionStorage.setItem(
                                        'date',
                                        schedule.dates
                                    );
                                    sessionStorage.setItem(
                                        'place',
                                        schedule.places
                                    );
                                    setDate(schedule.dates);
                                    setPlace(schedule.places);
                                    setModalState(false);
                                }}
                            >
                                <div className='w-2/5'>{schedule.places}</div>
                                <div className='w-full'>{schedule.dates}</div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </Portal>
    );
}
