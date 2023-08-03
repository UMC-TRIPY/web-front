import React, { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import { GoFileDirectory } from 'react-icons/go';

const DirectoryList = () => {
    const [directories, setDirectories] = useState([
        {
            id: 0,
            name: '갤러리',
            image: <AiOutlinePicture size={200} className='text-main-color' />
        },
        {
            id: 1,
            name: '파일목록',
            image: <GoFileDirectory size={200} className='text-main-color' />
        }
    ]);

    return (
        <>
            {directories.map((directory) => (
                <div
                    key={directory.id}
                    className='flex justify-center items-center basis-[25%]'
                >
                    <div className='flex flex-col items-center gap-8 cursor-pointer'>
                        {directory.image}
                        <div className='py-2'>{directory.name}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DirectoryList;
