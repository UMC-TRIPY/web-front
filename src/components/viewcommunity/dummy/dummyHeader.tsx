import React from 'react';
import Image from 'next/image';
import thumbsUp from 'public/images/thumbs-up.svg';
import eye from 'public/images/eye.svg';
import ProfilePic from 'public/images/user.svg'

interface ViewHeaderProps {
    keyword: string
}

export default function DummyHeader({keyword}: ViewHeaderProps) {
    return (
        <div className='mx-4 mb-12 border-b border-lightgrey'>
            <div className='flex-col mb-12'>
                <div className='text-3xl font-bold mb-5'>
                    {keyword}
                </div>
                <div className='flex items-center'>
                    <div className='w-10 h-10 mr-4'>
                        <Image src={ProfilePic} alt="프로필 사진" width={40}/>
                    </div>
                    <div className='flex-col'>
                        <div>
                            test2
                        </div>
                        <div className='flex text-sm text-grey'>
                            <div className='flex mr-4'>
                                2023.8.8
                            </div>
                            <div className='flex mr-4'>
                                <Image src={thumbsUp} alt='추천수' className='mr-1' />
                                9999
                            </div>
                            <div className='flex'>
                                <Image src={eye} alt='조회수' className='mr-1' />
                                9999K
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}