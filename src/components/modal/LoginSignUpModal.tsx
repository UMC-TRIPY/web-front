import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';
import { IoCloseOutline } from 'react-icons/io5';

//mode
// 끄기만 있는거, => 확인버튼이 아래
// 취소, 완료 있는거 => 확인버튼이 완료

type Props = {
    title?: String;
    setModalState: Function;
    children: React.ReactNode;
    onClickCompleteButton: Function;
    completeText: String;
};

export default function LoginSignUpModal({
    setModalState,
    title,
    children,
    onClickCompleteButton,
    completeText
}: Props) {
    const Modal = () => {
        return (
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
            </>
        );
    };

    useEffect(() => {
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
                    className='absolute top-0 left-0 w-screen h-screen bg-gray-500 opacity-50 z-50'
                    onClick={() => {
                        setModalState(false);
                    }}
                ></div>
                <div
                    className='absolute flex flex-col top-1/3 left-1/3 w-1/3 rounded-lg bg-neutral-50 z-50'
                    style={{ minHeight: '24rem' }}
                >
                    <Modal />
                </div>
            </div>
        </Portal>
    );
}
