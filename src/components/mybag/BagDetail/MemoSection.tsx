import React from 'react';

const MemoSection = () => {
    return (
        <div className='h-2/6 bg-brightgrey'>
            <div className='flex items-center h-1/5 text-2xl font-bold pl-8 py-8'>
                메모
            </div>
            <textarea
                className='w-full h-full pl-8 resize-none text-xl bg-brightgrey placeholder::text-grey outline-none'
                placeholder='메모를 입력하세요.'
            ></textarea>
        </div>
    );
};

export default MemoSection;
