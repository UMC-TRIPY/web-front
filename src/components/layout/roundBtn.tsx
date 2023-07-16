import React from "react";

interface RoundBtnProps {
    label: string;
    color: string;
    onClick?: () => void;
}

function RoundBtn (props:RoundBtnProps) {
    return (
        <div className="m-2">
            <button
                className={`${props.color} px-6 py-2 rounded-full`}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    )
}

export default RoundBtn;