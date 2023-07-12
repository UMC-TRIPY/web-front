import React from 'react';

type Props = {
    modalState: Function;
    children: React.ReactNode;
};

export default function Modal({ setModalState, children }: Props) {
    return (
        <div className='flex justify-center items-center'>
            <div className='absolute top-0 left-0 w-screen h-screen bg-slate-500 opacity-50 z-100'></div>
            <div className='absolute top-1/3 left-1/3 w-96 h-96 bg-slate-100 z-101'>
                {children}
            </div>
        </div>
    );
}
