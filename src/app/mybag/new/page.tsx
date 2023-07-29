'use client';

import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import RoundBtn from '@/components/layout/roundBtn';
import EmptyBag from '@/components/mybag/EmptyBag';
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
                    <EmptyBag />
                </div>
            </div>
        </>
    );
};

export default NewBag;
