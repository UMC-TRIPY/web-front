import React from 'react';
import DropdownList from './DropdownList';

const categories = [
    '여행자 보험',
    '관광지',
    '물가',
    '맛집',
    '음식',
    '환전',
    '현금',
    '카드',
    '쇼핑',
    '날씨'
];

const Dropdown = (props: any) => {
    const { category, setCategory, isDropdownOpen, setIsDropdownOpen } = props;
    return (
        <div
            className='flex justify-around w-3/12 bg-neutral-50'
            onClick={() => setIsDropdownOpen((prev: boolean) => !prev)}
        >
            <button
                className='flex items-center whitespace-nowrap rounded text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb]'
                type='button'
            >
                <span>{category}</span>
                <span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='h-5 w-5'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                            clipRule='evenodd'
                        />
                    </svg>
                </span>
            </button>
            <DropdownList visibility={isDropdownOpen}>
                <div className='flex flex-col gap-2'>
                    {categories.map((category, idx) => (
                        <div
                            className='flex justify-center w-full border-t-1 hover:text-[blue] hover:cursor-pointer border-b-2'
                            key={idx}
                            onClick={() => setCategory(categories[idx])}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </DropdownList>
        </div>
    );
};

export default Dropdown;
