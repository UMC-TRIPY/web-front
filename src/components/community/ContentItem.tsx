import Image from 'next/image';
import React from 'react';

const ContentItem = (props: any) => {
    const { content } = props;
    return (
        <div className='flex justify-between items-center text-[#A3A3A3] leading-10'>
            <div className='basis-1/20'>
                <Image src={content.imageSrc} alt='' width={30} height={30} />
            </div>
            <div className='basis-2/12'>{content.nickName}</div>
            <div className='basis-1/2'>{content.title}</div>
            <div className='flex basis-1/12 justify-between'>
                <Image src='/images/like.svg' alt='' width={20} height={20} />
                {content.like}
            </div>
            <div className='flex basis-1/12 justify-between'>
                <Image src='/images/view.svg' alt='' width={20} height={20} />
                {content.view}
            </div>
        </div>
    );
};

export default ContentItem;
