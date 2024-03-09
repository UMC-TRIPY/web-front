import React from 'react';

interface RoundBtnProps {
    label: string;
    color: string;
    px?: number;
    onClick?: () => void;
}

function RoundBtn(props: RoundBtnProps) {
    return (
        <button
            className={`${props.color} mx-2 px-6 py-2 rounded-full hover:bg-main-color`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default RoundBtn;
