'use client';

import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import RoundBtn from '@/components/layout/roundBtn';
import TopTab from '@/components/mybag/TopTab';
import Image from 'next/image';
import React, { useState } from 'react';

const NewBag = () => {
    const [tabs, setTabs] = useState([
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
        setTabs(
            tabs.map((tab) =>
                tab.id === e.target.id
                    ? { ...tab, clicked: true }
                    : { ...tab, clicked: false }
            )
        );
    };

    return (
        <>
            <div className='flex items-end h-36 gap-4 text-grey mb-4'>
                <TopTab tabs={tabs} handleClickTab={handleClickTab} />
            </div>
            <OtherSchedule />
            <div className='h-96'>
                <div className='flex h-full'>
                    <div className='flex justify-center items-center basis-[25%]'>
                        <div className='flex flex-col items-center gap-8 cursor-pointer'>
                            <Image
                                src='/images/bag.svg'
                                alt='my-bag'
                                width={150}
                                height={150}
                            />
                            <RoundBtn
                                label='가방 추가하기'
                                color='bg-lightgrey'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewBag;
