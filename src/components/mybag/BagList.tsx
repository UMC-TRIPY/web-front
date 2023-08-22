import { bagIDState } from '@/states/schedule';
import { IBag } from '@/types/bag';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const BagList = ({ bagList }: { bagList: IBag[] }) => {
    const router = useRouter();
    const setBagID = useSetRecoilState(bagIDState);

    const handleClickBag = (e: any) => {
        const id = parseInt(e.target.id);
        setBagID(id);
        router.push(`/mybag/detail/${id}`);
    };
    return (
        <>
            {bagList.map((bag: IBag, idx: number) => (
                <div
                    className='flex justify-center items-center basis-[25%]'
                    key={idx}
                    onClick={(e: any) => handleClickBag(e)}
                >
                    <div className='flex flex-col items-center gap-8 cursor-pointer'>
                        <Image
                            id={bag.bag_index.toString()}
                            src='/images/selectedBag.svg'
                            alt='my-bag'
                            width={150}
                            height={150}
                        />
                        <div className='py-2'>{bag.bag_name}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BagList;
