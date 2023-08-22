import React, { useState, useEffect } from 'react';
import { getPostTitle, getUserIndex, getViews, getThumbs, getCreatedAt } from '@/apis/community/posts';
import Image from 'next/image';
import thumbsUp from 'public/images/thumbs-up.svg';
import eye from 'public/images/eye.svg';


export default function ViewHeader() {
    const [postTitle, setPostTitle] = useState('');
    const [userIndex, setUserIndex] = useState(0);
    const [views, setViews] = useState(0);
    const [thumbs, setThumbs] = useState(0);
    const [created, setCreated] = useState('');
    let post_index = 2;

    useEffect(() => {
        getPostTitle(post_index).then((title) => {
            setPostTitle(title);
        });
        getUserIndex(post_index).then((user) => {
            setUserIndex(user);
        });
        getViews(post_index).then((view) => {
            setViews(view);
        })
        getThumbs(post_index).then((thumb) => {
            setThumbs(thumb);
        })
        getCreatedAt(post_index).then((date) => {
            setCreated(date);
        })
    }, []);

    return (
        <div className='mx-4 mb-12 border-b border-lightgrey'>
            <div className='flex-col mb-12'>
                <div className='text-3xl font-bold mb-5'>
                    {postTitle}
                </div>
                <div className='flex'>
                    <div className='w-10 h-10 border border-grey mr-4'>
                        {userIndex}프사
                    </div>
                    <div className='flex-col'>
                        <div>
                            {userIndex}닉네임
                        </div>
                        <div className='flex text-sm text-grey'>
                            <div className='flex mr-4'>
                                {created}
                            </div>
                            <div className='flex mr-4'>
                                <Image src={thumbsUp} alt='추천수' className='mr-1' />
                                {thumbs}
                            </div>
                            <div className='flex'>
                                <Image src={eye} alt='조회수' className='mr-1' />
                                {views}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}