import React from "react";

interface RoundBtnProps {
    label: string;
    color: string;
    px: string;
    onClick?: () => void;
}

function RoundBtn (props:RoundBtnProps) {
    return (
        <div className="mx-2">
            <button
                className={`${props.color} px-${props.px} py-2 rounded-full`}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    )
}

export default RoundBtn;