import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';
import { IoCloseOutline } from 'react-icons/io5';

type Props = {
    setModalState: Function;
    children: React.ReactNode;
    onClickCompleteButton: Function;
    completeText: String;
};

export default function SignUpDoneModal({
    setModalState,
    children,
    onClickCompleteButton,
    completeText
}: Props) {
    const Modal = () => {
        return (
            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-row-reverse pr-5 pt-5'>
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
                    className='justify-center items-center  border-t border-gray-200 bg-gray-50 py-6 rounded-b-lg text-xl'
                    onClick={() => onClickCompleteButton()}
                >
                    {completeText}
                </button>
            </div>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
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
                <div className='absolute flex flex-col top-1/3 letf-1/3 w-1/3 rounded-lg bg-neutral-50 z-101 h-96'>
                    <Modal />
                </div>
            </div>
        </Portal>
    );
}
