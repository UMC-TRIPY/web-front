'use client';

import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import Image from 'next/image';
import React, { useState } from 'react';

const NewBag = () => {
    const [topTab, setTopTab] = useState([
        {
            id: '0',
            text: '내 가방 만들기',
            clicked: true
        },
        {
            id: '1',
            text: '폴더보기',
            clicked: false
        }
    ]);

    const handleClickTab = (e: any) => {
        setTopTab(
            topTab.map((tab) =>
                tab.id === e.target.id
                    ? { ...tab, clicked: true }
                    : { ...tab, clicked: false }
            )
        );
    };
    return (
        <>
            <div className='flex items-end h-36 gap-4 text-grey mb-4'>
                {topTab.map((tab) => (
                    <div
                        key={tab.id}
                        id={tab.id}
                        className={
                            tab.clicked
                                ? 'text-main-color cursor-pointer'
                                : 'text-grey cursor-pointer'
                        }
                        onClick={handleClickTab}
                    >
                        <div className='flex justify-center'>
                            {tab.clicked && (
                                <Image
                                    src='/images/selected.png'
                                    alt=''
                                    width={15}
                                    height={15}
                                />
                            )}
                        </div>

                        {tab.text}
                    </div>
                ))}

                {/* <div
                    id='0'
                    className='text-main-color'
                    onClick={handleClickTab}
                >
                    내 가방 만들기
                </div>
                <div id='1' onClick={handleClickTab}>
                    폴더보기
                </div> */}
            </div>
            <OtherSchedule />
        </>
    );
};

export default NewBag;
