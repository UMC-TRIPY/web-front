// TransparentModal.tsx

import React, { useEffect, useRef, useState } from 'react';
import Portal from '@/components/modal/Portal';
import { IoCloseOutline } from 'react-icons/io5';

//mode
// 끄기만 있는거, => 확인버튼이 아래
// 취소, 완료 있는거 => 확인버튼이 완료

type Props = {
    modalMode: number;
    title?: string;
    setModalState: Function;
    children: React.ReactNode;
    onClickCompleteButton: Function;
    completeText: string;
    contentHeight: number | undefined;
};

export default function TransparentModal({
    modalMode,
    setModalState,
    title,
    children,
    onClickCompleteButton,
    completeText,
    contentHeight
}: Props) {
    const modalContentRef = useRef<HTMLDivElement>(null);
    const [contentHeightState, setContentHeightState] = useState<number>(0);

    const transparentModal: React.ReactNode[] = [
        <>
            <div className='flex basis-[15%] justify-between items-center px-5 p-4'>
                <div className='font-bold text-xl'>{title}</div>
                <button
                    className='items-center'
                    onClick={() => {
                        setModalState(false);
                    }}
                >
                    <IoCloseOutline size='40px' />
                </button>
            </div>
            <div className='basis-[70%]'>{children}</div>
            <button
                className='grow justify-center items-center rounded-b-lg border-t border-gray-200 bg-gray-50'
                onClick={() => onClickCompleteButton()}
            >
                <span className='text-xl'>{completeText}</span>
            </button>
        </>,
        <>
            {/* 모달 내용의 높이를 측정하여 state에 저장 */}
            <div ref={modalContentRef} className='basis-[85%]'>
                {children}
            </div>
        </>
    ];

    useEffect(() => {
        // 모달이 열릴 때 가로 스크롤을 없애기
        document.body.style.overflowX = 'hidden';

        // 모달 내용의 높이 측정하여 state에 저장
        if (modalContentRef.current) {
            setContentHeightState(modalContentRef.current.offsetHeight);
        }
    }, []);

    return (
        <Portal selector='#body'>
            <div className='flex justify-center items-center'>
                <div
                    className='absolute top-0 left-0 w-screen h-screen'
                    onClick={() => {
                        setModalState(false);
                    }}
                ></div>
                <div
                    className='absolute flex flex-col top-[345px] w-[690px] rounded-lg bg-white z-101 shadow-md'
                    style={{ 
                        height: contentHeight ? `${contentHeight}px` : undefined, 
                    }}
                >
                    {transparentModal[modalMode as number]}
                </div>
            </div>
        </Portal>
    );
}
