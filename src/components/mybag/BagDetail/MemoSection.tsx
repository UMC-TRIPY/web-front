import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { getBagMemo, writeBagMemo } from '@/apis/bag';

const MemoSection = () => {
    const { bag_id } = useParams();
    const [memoText, setMemoText] = useState<string>('');

    const handleSaveMemo = async () => {
        await writeBagMemo(parseInt(bag_id), memoText);
    };

    const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setMemoText(e.target.value);

    useEffect(() => {
        if (bag_id !== undefined) {
            getBagMemo(parseInt(bag_id)).then((data) => {
                if (data !== null) setMemoText(data);
            });
        }
    }, [bag_id]);

    return (
        <div className='p-5 bg-brightgrey h-64 rounded-lg'>
            <div className='flex justify-between'>
                <span className='text-2xl font-bold'>메모</span>
                <button
                    className='bg-lightgrey py-2 px-3 rounded-full hover:bg-main-color text-xs text-dark-black'
                    onClick={handleSaveMemo}
                >
                    저장
                </button>
            </div>
            <textarea
                className='resize-none text-xl bg-brightgrey placeholder::text-grey mt-3 outline-none w-full h-full'
                placeholder='메모를 입력하세요.'
                value={memoText}
                onChange={handleChangeMemo}
            />
        </div>
    );
};

export default MemoSection;
