import { getBagMemo, writeBagMemo } from '@/apis/bag';
import RoundBtn from '@/components/layout/roundBtn';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MemoSection = () => {
    const { bag_id } = useParams();
    const [memoText, setMemoText] = useState<string>('');
    const handleClickSaveMemo = async () => {
        await writeBagMemo(parseInt(bag_id), memoText);
    };

    useEffect(() => {
        if (bag_id !== undefined) {
            getBagMemo(parseInt(bag_id)).then((data) => {
                if (data !== null) setMemoText(data);
            });
        }
    }, [bag_id]);

    return (
        <div className='h-2/6 bg-brightgrey'>
            <div className='flex justify-between items-center px-4'>
                <div className='flex items-center h-1/5 text-2xl font-bold pl-8 py-8'>
                    메모
                </div>
                <div className='hover:text-grey'>
                    <RoundBtn
                        color='bg-lightgrey'
                        label='저장'
                        onClick={handleClickSaveMemo}
                    />
                </div>
            </div>

            <textarea
                className='w-full h-full pl-8 resize-none text-xl bg-brightgrey placeholder::text-grey outline-none'
                placeholder='메모를 입력하세요.'
                value={memoText}
                onChange={(e) => setMemoText(e.target.value)}
            ></textarea>
        </div>
    );
};

export default MemoSection;
