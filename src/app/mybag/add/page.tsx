'use client';

import React, { useState } from 'react';

import { useRecoilValue } from 'recoil';

import { makeNewTravelBag } from '@/apis/bag';
import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import NewBagModal from '@/components/modal/NewBagModal';
import BagList from '@/components/mybag/BagList';
import EmptyBag from '@/components/mybag/EmptyBag';
import { planIDState } from '@/states/schedule';
import { IBag } from '@/types/bag';

const NewBag = () => {
    const [bagList, setBagList] = useState<IBag[]>([]);
    const [isNewBagModal, setIsNewBagModal] = useState<boolean>(false);
    const planID = useRecoilValue(planIDState);

    const handleAddNewBag = async (bag_name: string) => {
        const bag_index = await makeNewTravelBag(planID, bag_name);
        setBagList([
            ...bagList,
            {
                bag_index,
                bag_name,
                user_index: -1
            }
        ]);

        setIsNewBagModal(false);
    };

    const handleOpenModal = () => setIsNewBagModal(true);

    return (
        <>
            <div className='h-36 gap-4 text-grey mb-4'></div>
            <OtherSchedule href='mybag' register={false} top='top-[340px]' />
            <div className='flex h-full py-12'>
                {bagList.length > 0 &&
                    bagList.map((bag) => (
                        <BagList key={bag.bag_name} bag={bag} />
                    ))}
                <EmptyBag handleOpenModal={handleOpenModal} />
            </div>
            {isNewBagModal && (
                <NewBagModal
                    setIsModal={setIsNewBagModal}
                    handleAddNewBag={handleAddNewBag}
                />
            )}
        </>
    );
};

export default NewBag;
