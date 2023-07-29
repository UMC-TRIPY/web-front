import Image from 'next/image';
import React from 'react';

const BagList = () => {
    return (
        <>
            <div className='flex justify-center items-center basis-[25%]'>
                <div className='flex flex-col items-center gap-8 cursor-pointer'>
                    <Image
                        src='/images/selectedBag.svg'
                        alt='my-bag'
                        width={150}
                        height={150}
                    />
                    <div className='py-2'>캐리어</div>
                </div>
            </div>
        </>
    );
};

export default BagList;
