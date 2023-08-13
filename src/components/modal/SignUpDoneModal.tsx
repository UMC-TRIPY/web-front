import React, { useEffect } from 'react';
import Portal from '@/components/modal/Portal';
import { IoCloseOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

export default function SignUpDoneModal({ children }: Props) {
    const router = useRouter();
    const Modal = () => {
        return (
            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-row-reverse pr-5 pt-5'>
                    <button
                        className='items-center'
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        <IoCloseOutline size='40px' />
                    </button>
                </div>
                <div className='basis-[70%]'>{children}</div>
                <button
                    className='justify-center items-center  border-t border-gray-200 bg-gray-50 py-6 rounded-b-lg text-xl'
                    onClick={() => router.push('/')}
                >
                    확인
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
            <div className='flex justify-center items-center absolute top-0 left-0 w-screen h-screen bg-modal-bg z-100'>
                <div className='absolute flex flex-col top-1/3 letf-1/3 w-1/3 rounded-lg bg-neutral-50 z-101 h-96'>
                    <Modal />
                </div>
            </div>
        </Portal>
    );
}
