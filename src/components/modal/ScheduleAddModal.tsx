import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';

//mode
// 끄기만 있는거, => 확인버튼이 아래
// 취소, 완료 있는거 => 확인버튼이 완료

type Props = {
    setModalState: Function;
    children: React.ReactNode;
    onClickCompleteButton: Function;
};

export default function ScheduleAddModal({
    setModalState,
    children,
    onClickCompleteButton
}: Props) {
    const Modal = () => (
        <>
            <div className='flex justify-between items-center px-5 rounded-t-lg border-b border-gray-200 bg-gray-50 p-4'>
                <button
                    onClick={() => {
                        setModalState(false);
                    }}
                >
                    <span className='text-xs'>취소</span>
                </button>
                <div className='font-bold text-xl'>일정 등록</div>
                <button onClick={() => onClickCompleteButton()}>
                    <span className='text-xs'>저장</span>
                </button>
            </div>
        </>
    );

    useEffect(() => {
        /* TODO: 스크롤이 내려가 있는 상태로 모달창 띄우는 방법도 고려 */
        window.scrollTo(0, 0);
        // const portal = document.getElementById('portal');
        // if (portal) portal.classList.add(`top-[${window.scrollY}px]`);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <Portal selector='#body'>
            <div className='flex justify-center items-center'>
                <div
                    className='absolute top-0 left-0 w-screen h-screen bg-gray-500 opacity-50 z-100'
                    onClick={() => {
                        setModalState(false);
                    }}
                ></div>
                <div
                    className='absolute flex flex-col top-1/3 left-1/3 w-1/3 rounded-lg bg-neutral-50 z-101'
                    style={{ minHeight: '24rem' }}
                >
                    <Modal />
                    <div className='basis-[85%]'>{children}</div>
                </div>
            </div>
        </Portal>
    );
}
