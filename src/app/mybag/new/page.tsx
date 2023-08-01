'use client';

import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import NewBagModal from '@/components/modal/NewBagModal';
import BagList from '@/components/mybag/BagList';
import DirectoryList from '@/components/mybag/DirectoryList';
import EmptyBag from '@/components/mybag/EmptyBag';
import TopTab from '@/components/mybag/TopTab';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

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

    const [bagList, setBagList] = useState([
        {
            id: '0',
            name: '캐리어'
        },
        {
            id: '1',
            name: '크로스백'
        }
    ]);

    const [isNewBagModal, setIsNewBagModal] = useState<boolean>(false);
    const lastClicedTab = useRef<number>(0);

    const handleClickTab = (e: any) => {
        lastClicedTab.current = parseInt(e.target.id);
        setTabs(
            tabs.map((tab) =>
                tab.id === e.target.id
                    ? { ...tab, clicked: true }
                    : { ...tab, clicked: false }
            )
        );
    };

    const handleAddNewBag = (bagName: string) => {
        setBagList([
            ...bagList,
            { id: bagList.length.toString(), name: bagName }
        ]);
        setIsNewBagModal(false);
    };

    return (
        <>
            <div className='flex items-end h-36 gap-4 text-grey mb-4'>
                <TopTab tabs={tabs} handleClickTab={handleClickTab} />
            </div>
            <OtherSchedule />
            <div className='h-96'>
                <div className='flex h-full'>
                    {lastClicedTab.current ? (
                        <DirectoryList />
                    ) : (
                        <BagList bagList={bagList} />
                    )}
                    <EmptyBag setIsNewBagModal={setIsNewBagModal} />
                    {isNewBagModal && (
                        <NewBagModal
                            setIsModal={setIsNewBagModal}
                            handleAddNewBag={handleAddNewBag}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default NewBag;
