import React from 'react';
import { RxCross1 } from 'react-icons/rx';

interface SelectedPlacesProps {
    selectedCities: string[];
    setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SelectedPlaces({
    selectedCities,
    setSelectedCities
}: SelectedPlacesProps) {
    const onRemoveCity = (city: string) => {
        // 선택된 도시 삭제
        setSelectedCities((prevCities) =>
            prevCities.filter((item) => item !== city)
        );
    };

    return (
        <div className='flex flex-col bg-brightgrey rounded-md px-[33px] py-2.5 mx-4'>
            <div className='py-2.5'>여행 일정 등록하기</div>
            <div className='flex py-2.5'>
                {selectedCities.map((city, index) => (
                    <div
                        className='flex text-center px-3 py-2 mr-2 rounded-full border border-grey text-[12px] text-darkgrey'
                        key={index}
                    >
                        {city}
                        <button
                            className='pl-2 pb-0.5' // RxCross가 중앙에 위치하기 위해 pb-0.5
                            onClick={() => onRemoveCity(city)}
                        >
                            <RxCross1 size={12} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
