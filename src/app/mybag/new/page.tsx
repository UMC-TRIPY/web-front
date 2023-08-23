'use client';

import {
    getScheduleTravelBagList,
    getTravelBagList,
    getTravelPlanList,
    makeNewTravelBag
} from '@/apis/bag';
import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import NewBagModal from '@/components/modal/NewBagModal';
import BagList from '@/components/mybag/BagList';
import EmptyBag from '@/components/mybag/EmptyBag';
import { planIDState } from '@/states/schedule';
import { IBag } from '@/types/bag';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

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

    useEffect(() => {
        if (planID !== -1) {
            getScheduleTravelBagList(planID).then((data) => {
                setBagList(data);
            });
        }
    }, [planID]);

    return (
        <>
            <div className='flex items-end h-36 gap-4 text-grey mb-4'></div>
            <OtherSchedule href='mybag' register={false} top='top-[340px]' />
            <div className='h-96'>
                <div className='flex h-full'>
                    <BagList bagList={bagList} />
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
