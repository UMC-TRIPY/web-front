import React from 'react';

interface ButtonProps {
    label: string;
    color: string;
    onClick?: () => void;
}

function Button (props:ButtonProps) {
    return (
        <div className="m-2 mt-14 mb-48">
            <button
                className={`${props.color} px-11 py-3.5 rounded-md`}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    )
}

export default function ConfirmBtns () {
    return (
        <div className="flex justify-center">
            <Button label="탈퇴하기" color="bg-lightgrey" />
            <Button label="수정하기" color="bg-primary" />
        </div>  
    )
}