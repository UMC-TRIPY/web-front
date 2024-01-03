import React from 'react';
import format from 'date-fns/format';
import { AiOutlineCalendar } from 'react-icons/ai';

const SelectDates = ({
    title,
    value,
    isOpen,
    setIsOpen
}: {
    title: null | string;
    value: null | Date;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div
            onClick={() => {
                setIsOpen(!isOpen);
            }}
            className='flex items-center justify-between px-5 h-16 w-5/12 text-grey border border-lightgrey rounded-l hover:cursor-pointer'
        >
            {value === null ? title : format(value, 'yyyy.MM.dd')}
            <AiOutlineCalendar size={24} />
        </div>
    );
};

export default SelectDates;
