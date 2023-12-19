import React from 'react';

interface IUnderlineSearchInputProps {
    place: string;
    setPlace: React.Dispatch<React.SetStateAction<string>>;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UnderlineSearchInput({
    place,
    setPlace,
    setModalOpen
}: IUnderlineSearchInputProps) {
    const handleInputPlace = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPlace(e.target.value);

    const handleModalOpen = () => setModalOpen(true);
    return (
        <input
            className='h-14 w-full py-3.5 border-b border-gray-300 outline-none'
            type='text'
            placeholder='보고 싶은 여행지를 입력하세요'
            value={place}
            onChange={handleInputPlace}
            onClick={handleModalOpen}
        />
    );
}
