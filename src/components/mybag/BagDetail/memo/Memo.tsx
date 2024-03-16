import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { getBagMemo, writeBagMemo } from '@/apis/bag';
import RoundedButton from '@/components/common/button/RoundedButton';

export default function Memo() {
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
                <RoundedButton onClick={handleSaveMemo} smallLabel>
                    저장
                </RoundedButton>
            </div>
            <textarea
                className='resize-none text-xl bg-brightgrey placeholder::text-grey mt-3 outline-none w-full'
                placeholder='메모를 입력하세요.'
                value={memoText}
                onChange={handleChangeMemo}
            />
        </div>
    );
}
