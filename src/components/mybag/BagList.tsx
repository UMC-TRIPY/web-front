import Image from 'next/image';
import React from 'react';

interface IBag {
    id: string;
    name: string;
}

const BagList = ({ bagList }: { bagList: IBag[] }) => {
    return (
        <>
            {bagList.map((bag: IBag, idx: number) => (
                <div
                    className='flex justify-center items-center basis-[25%]'
                    key={idx}
                >
                    <div className='flex flex-col items-center gap-8 cursor-pointer'>
                        <Image
                            src='/images/selectedBag.svg'
                            alt='my-bag'
                            width={150}
                            height={150}
                        />
                        <div className='py-2'>{bag.name}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BagList;
