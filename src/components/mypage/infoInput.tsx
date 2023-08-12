import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface InfoInputProps {
    label: string;
    placeholder?: string;
}

export default function InfoInput({ label, placeholder }: InfoInputProps) {
    const [text, setText] = useState('');

    const handleChange = (
        event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        setText(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.currentTarget.blur();
        }
    };

    return (
        <div className='w-full'>
            <label className='block text-lg py-4'>{label}</label>
            {label === '국적과 지역' ? (
                <select
                    className='w-full h-12 border border-gray-300 p-2.5'
                    value={text}
                    onChange={handleChange}
                >
                    <option value=''>국적과 지역</option>
                    <option value='대한민국, 서울'>대한민국, 서울</option>
                    <option value='대한민국, 인천'>대한민국, 인천</option>
                    <option value='대한민국, 경기도'>대한민국, 경기도</option>
                </select>
            ) : (
                <textarea
                    className='w-full h-12 border border-gray-300 p-2.5'
                    value={text}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                ></textarea>
            )}
        </div>
    );
}
