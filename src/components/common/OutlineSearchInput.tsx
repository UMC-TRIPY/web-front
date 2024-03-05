import React from 'react';

interface IOutlineSearchInputProps {
    place: string;
    setPlace: React.Dispatch<React.SetStateAction<string>>;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OutlineSearchInput({
    place,
    setPlace,
    setModalOpen
}: IOutlineSearchInputProps) {
    const handleInputPlace = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPlace(e.target.value);

    const handleModalOpen = () => setModalOpen(true);

    return (
        <input
            className='border border-grey h-14 rounded-lg py-3.5 pl-6 searchPlace'
            type='text'
            placeholder='보고 싶은 여행지를 입력하세요'
            value={place}
            onChange={handleInputPlace}
            onClick={handleModalOpen}
        />
    );
}
