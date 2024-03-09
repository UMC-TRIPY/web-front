import { useMemo } from 'react';

import { ListProps } from '@/types/list';

import Pagination from '../maincommunity/Pagination';
import ListItem from './ListItem';

const tableHeaders = ['일정', '장소', '관리하기'];

export default function List({
    mode,
    items,
    label,
    handleDeleteBag
}: ListProps) {
    // Todo: interface mode에 따라 다르게 해야함
    const title = useMemo(() => (mode === 'travel' ? '여행' : '가방'), [mode]);
    return (
        <div className='px-4 mt-16'>
            <div className='text-3xl font-bold mb-5'>내 {title} 목록</div>
            <div className='rounded-md bg-brightgrey'>
                <div className='border-b border-b-lightgrey py-5 flex'>
                    {tableHeaders.map((header) => (
                        <span key={header} className='w-1/3 text-center'>
                            {header}
                        </span>
                    ))}
                </div>
                <div className='py-5'>
                    {items.length === 0 ? (
                        <span className='flex justify-center'>
                            여행 일정이 없습니다.
                        </span>
                    ) : (
                        items.map((items) => (
                            <ListItem
                                key={items.date}
                                mode={mode}
                                item={items}
                                label={label}
                                handleDeleteBag={handleDeleteBag}
                            />
                        ))
                    )}
                </div>
            </div>
            <Pagination totalPages={1} current={0} setCurrent={() => {}} />
        </div>
    );
}
