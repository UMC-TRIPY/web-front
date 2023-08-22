import React from 'react';

interface ConfirmBtnProps {
    label: string;
    color: string;
    onClick?: any;
}

function ConfirmBtn(props: ConfirmBtnProps) {
    return (
        <div className='m-2'>
            <button
                className={`${props.color} px-11 py-3.5 rounded-md`}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    );
}

export default ConfirmBtn;
