import React from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { GoFileDirectory } from 'react-icons/go';

const DirectoryList = () => {
    return (
        <>
            <div className='flex justify-center items-center basis-[25%]'>
                <div className='flex flex-col items-center gap-8 cursor-pointer'>
                    <AiOutlinePicture size={200} className='text-main-color' />
                    <div className='py-2'>갤러리</div>
                </div>
            </div>
            <div className='flex justify-center items-center basis-[25%]'>
                <div className='flex flex-col items-center gap-8 cursor-pointer'>
                    <GoFileDirectory size={200} className='text-main-color' />
                    <div className='py-2'>파일목록</div>
                </div>
            </div>
        </>
    );
};

export default DirectoryList;
