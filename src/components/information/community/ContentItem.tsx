import Image from 'next/image';
import React from 'react';
import { IContent } from './Community';

interface IContentItemProp {
    content: IContent;
}

const ContentItem = ({ content }: IContentItemProp) => {
    return (
        <div className='flex justify-between items-center text-grey leading-10'>
            <div className='flex gap-5'>
                <Image
                    src={content.imageSrc}
                    alt='프로필 사진'
                    width={30}
                    height={30}
                />
                <div className='w-44'>{content.nickName}</div>
            </div>
            <span className='w-full px-6'>{content.title}</span>
            <div className='flex gap-8'>
                <div className='flex gap-4 justify-between'>
                    <Image
                        src='/images/like.svg'
                        alt='좋아요 아이콘'
                        width={20}
                        height={20}
                    />
                    {content.like}
                </div>
                <div className='flex gap-4 justify-between'>
                    <Image
                        src='/images/view.svg'
                        alt='조회수 아이콘'
                        width={20}
                        height={20}
                    />
                    {content.view}
                </div>
            </div>
        </div>
    );
};

export default ContentItem;
