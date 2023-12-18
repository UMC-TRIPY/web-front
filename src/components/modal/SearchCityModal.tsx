import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';
import Link from 'next/link';

type Props = {
    setModalState: Function;
    filteredDestinations: [string, string][];
    top: string;
};

export default function SearchCityModal({
    setModalState,
    filteredDestinations,
    top
}: Props) {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    });
    return (
        <Portal selector='#body'>
            <div className={`flex items-center justify-center`}>
                <div
                    className='absolute top-0 left-0 w-screen h-screen'
                    onClick={() => {
                        setModalState(false);
                    }}
                ></div>
                <div
                    className={`absolute flex flex-col rounded-lg max-h-56 bg-white z-101 shadow-md max-w-[640px] w-1/2 ${top} ${
                        filteredDestinations.length > 4
                            ? 'overflow-y-scroll'
                            : 'overflow-y-hidden'
                    }`}
                >
                    {filteredDestinations.map(
                        (result: [string, string], idx: number) => (
                            <Link
                                key={`resultlink${idx}`}
                                href={`/information/${result[1]}`}
                            >
                                <div
                                    key={`result${idx}`}
                                    className='py-4 pl-8 border-y border-morelightgrey cursor-pointer'
                                >
                                    {result[0]}
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </Portal>
    );
}
