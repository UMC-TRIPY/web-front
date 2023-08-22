import React, { useState, useEffect } from 'react';
import { getPostTitle, getUserIndex, getViews, getThumbs, getCreatedAt, getUserNickname } from '@/apis/community/posts';
import Image from 'next/image';
import thumbsUp from 'public/images/thumbs-up.svg';
import eye from 'public/images/eye.svg';
import ProfilePic from 'public/images/user.svg'


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

    const dateObject = new Date(created);
    const formattedDate = dateObject.toLocaleDateString(); 

    const [nickname, setNickname] = useState('');

    useEffect(() => {
        getUserNickname(userIndex).then((name) => {
            setNickname(name);
        })
    }, [])

    return (
        <div className='mx-4 mb-12 border-b border-lightgrey'>
            <div className='flex-col mb-12'>
                <div className='text-3xl font-bold mb-5'>
                    {postTitle}
                </div>
                <div className='flex items-center'>
                    <div className='w-10 h-10 mr-4'>
                        <Image src={ProfilePic} alt="프로필 사진" width={40}/>
                    </div>
                    <div className='flex-col'>
                        <div>
                            {nickname}
                        </div>
                        <div className='flex text-sm text-grey'>
                            <div className='flex mr-4'>
                                {formattedDate}
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