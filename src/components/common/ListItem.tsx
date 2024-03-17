'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ListItemProps } from '@/types/list';

import MyBagModal from '../modal/MyBagModal';
import ScheduleDetailModal from '../modal/ScheduleDetailModal';

export default function ListItem({
    item,
    mode,
    label,
    handleDeleteBag
}: ListItemProps) {
    // Todo: interface mode에 따라 다르게 해야함
    const [modalState, setModalState] = useState({
        isOpen: false,
        selectedPlace: ''
    });
    const router = useRouter();

    const handleOpenModal = () =>
        setModalState({ isOpen: true, selectedPlace: item.place });

    const handleByLabel = () => {
        switch (label) {
            case '수정하기':
                router.push(
                    `/plan/${item.plan_id}/schedule/${item.schedule_id}/update`
                );
                return;
            case '가방 만들기':
                router.push('mybag/new');
                return;
            case '모아보기':
                router.push('summary/list');
                return;
            case '삭제하기':
                handleDeleteBag!(item.plan_id);
                return;
            default:
                alert('잘못된 접근입니다.');
                return;
        }
    };
    return (
        <>
            <div className='flex items-center justify-between py-[16.5px]'>
                <div className='w-1/3 text-center'>{item.date}</div>
                <div className='w-1/3 text-center'>{item.place}</div>
                <div className='flex w-1/3 justify-center gap-5'>
                    <button
                        className='py-2 px-4 bg-lightgrey rounded-full'
                        onClick={handleOpenModal}
                    >
                        상세보기
                    </button>
                    <button
                        className='py-2 px-4 bg-lightgrey rounded-full'
                        onClick={handleByLabel}
                    >
                        {label}
                    </button>
                </div>
            </div>

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
        </>
    );
}
