import { IBag } from '@/types/bag';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const BagList = ({ bagList }: { bagList: IBag[] }) => {
    const router = useRouter();

    console.log('BagList com', bagList);
    return (
        <>
            {bagList.map((bag: IBag, idx: number) => (
                <div
                    className='flex justify-center items-center basis-[25%]'
                    key={idx}
                    onClick={() =>
                        router.push('/mybag/detail', { name: bag.bag_name })
                    }
                >
                    <div className='flex flex-col items-center gap-8 cursor-pointer'>
                        <Image
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
