import React from 'react';

import Image from 'next/image';

import RoundBtn from '../layout/roundBtn';

interface EmptyBagProps {
    handleOpenModal: () => void;
}

const EmptyBag = ({ handleOpenModal }: EmptyBagProps) => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 px-20'>
            <button onClick={handleOpenModal}>
                <Image
                    src='/images/bag.svg'
                    alt='my-bag'
                    width={150}
                    height={150}
                />
            </button>
            <RoundBtn
                label='가방 추가하기'
                color='bg-lightgrey'
                onClick={handleOpenModal}
            />
        </div>
    );
};

export default EmptyBag;
