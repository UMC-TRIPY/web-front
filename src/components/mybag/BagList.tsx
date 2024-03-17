import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { IBag } from '@/types/bag';

const BagList = ({ bag }: { bag: IBag }) => {
    return (
        <Link
            href={`/mybag/detail/${bag.bag_index}`}
            className='flex flex-col justify-center items-center gap-8 px-20'
        >
            <Image
                src='/images/selectedBag.svg'
                alt='my-bag'
                width={150}
                height={150}
            />
            <span className='py-[6px] text-xl'>{bag.bag_name}</span>
        </Link>
    );
};

export default BagList;
