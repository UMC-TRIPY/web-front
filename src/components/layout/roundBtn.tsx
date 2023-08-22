import React from 'react';

interface RoundBtnProps {
    label: string;
    color: string;
    px?: number;
    onClick?: () => void;
}

function RoundBtn(props: RoundBtnProps) {
    return (
        <div className='mx-2'>
            <button
                className={`${props.color} px-6 py-2 rounded-full hover:bg-main-color`}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    );
}

export default RoundBtn;
