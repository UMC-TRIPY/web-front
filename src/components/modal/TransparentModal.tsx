// TransparentModal.tsx

import React, { useEffect, useRef, useState } from 'react';
import Portal from '@/components/modal/Portal';
import { IoCloseOutline } from 'react-icons/io5';

//mode
// 끄기만 있는거, => 확인버튼이 아래
// 취소, 완료 있는거 => 확인버튼이 완료

type Props = {
    modalMode: Number;
    title?: String;
    setModalState: Function;
    children: React.ReactNode;
    onClickCompleteButton: Function;
    completeText: String;
};

export default function TransparentModal({
    modalMode,
    setModalState,
    title,
    children,
    onClickCompleteButton,
    completeText
}: Props) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

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
            <div ref={contentRef} className='basis-[85%]'>
                {children}
            </div>
        </>
    ];

    useEffect(() => {
        // 모달이 열릴 때 body에 padding-right를 추가하여 스크롤을 없애기
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '1px';

        // 모달 내용의 높이 측정하여 state에 저장
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
        
        return () => {
            // 모달이 닫힐 때 padding-right를 제거하여 스크롤 복구
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0';
        };
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
                    style={{ height: `${contentHeight}px`, minHeight: '6rem', maxHeight: '30rem' }}
                >
                    {transparentModal[modalMode as number]}
                </div>
            </div>
        </Portal>
    );
}
