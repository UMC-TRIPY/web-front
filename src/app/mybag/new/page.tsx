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
        setBagList([
            ...bagList,
            {
                bag_name,
                departureDate: '2023-08-15',
                arrivalDate: '2023-08-20',
                stay_duration: '3박 4일'
            }
        ]);
        // await makeNewTravelBag(pid, bag_name);
        await makeNewTravelBag(2, bag_name);

        setIsNewBagModal(false);
    };

    useEffect(() => {
        getScheduleTravelBagList(planID).then((data) => {
            console.log('getScheduleTravelBagList:', data);
            console.log('planID:', planID);

            setBagList(data);
        });
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
