'use client';
import { useMemo, useState } from 'react';
import Pagination from '../maincommunity/Pagination';
import ListItem from './ListItem';
import ScheduleDetailModal from '../modal/ScheduleDetailModal';
import MyBagModal from '../modal/MyBagModal';
import { ListProps } from '@/types/list';

export default function List({
    mode,
    items,
    label,
    handleDeleteBag
}: ListProps) {
    // Todo: interface mode에 따라 다르게 해야함
    const [modalState, setModalState] = useState({
        isOpen: false,
        selectedPlace: ''
    });
    const title = useMemo(() => (mode === 'travel' ? '여행' : '가방'), [mode]);
    return (
        <div className='mx-4 mt-16'>
            <div className='text-3xl font-bold mb-5'>내 {title} 목록</div>
            <div className='rounded-md bg-brightgrey'>
                <div className='border-b border-b-lightgrey py-5'>
                    <div className='flex justify-between'>
                        <div className='w-1/3 text-center'>
                            <p>일정</p>
                        </div>
                        <div className='w-1/3 text-center'>
                            <p>장소</p>
                        </div>
                        <div className='w-1/3 text-center'>
                            <p>관리하기</p>
                        </div>
                    </div>
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
                                item={items}
                                label={label}
                                setModalState={setModalState}
                                handleDeleteBag={handleDeleteBag}
                            />
                        ))
                    )}
                </div>
            </div>
            <Pagination totalPages={1} current={0} setCurrent={() => {}} />
            {modalState.isOpen &&
                (mode === 'travel' ? (
                    <ScheduleDetailModal
                        setIsModal={setModalState}
                        selectedPlace={modalState.selectedPlace}
                    />
                ) : (
                    <MyBagModal
                        setIsModal={setModalState}
                        selectedPlace={modalState.selectedPlace}
                    />
                ))}
        </div>
    );
}
