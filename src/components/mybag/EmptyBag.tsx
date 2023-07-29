import Image from 'next/image';
import React from 'react';
import RoundBtn from '../layout/roundBtn';

const EmptyBag = () => {
    return (
        <>
            <div className='flex justify-center items-center basis-[25%]'>
                <div className='flex flex-col items-center gap-8 cursor-pointer'>
                    <Image
                        src='/images/bag.svg'
                        alt='my-bag'
                        width={150}
                        height={150}
                    />
                    <RoundBtn label='가방 추가하기' color='bg-lightgrey' />
                </div>
            </div>
        </>
    );
};

export default EmptyBag;
