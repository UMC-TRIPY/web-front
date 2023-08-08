import React from 'react';
import TransparentModal from './TransparentModal';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

interface CityProps {
    city: string;
    onClick: () => void;
}

function City({ city, onClick }: CityProps) {
    return (
        <div className='border border-grey rounded-full mr-2'>
            <div className='flex px-3 py-2 text-[12px]'>
                {city}
                <button
                    className='pl-2 pb-0.5' // RxCross가 중앙에 위치하기 위해 pb-0.5
                    onClick={onClick}
                >
                    <RxCross1 size={12} />
                </button>
            </div>
        </div>
    );
}

interface SearchboxModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    onCreateSchedule: () => void;
    selectedCities: string[];
    setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
}

function SearchboxModal({
    setIsModal,
    selectedCities,
    setSelectedCities,
    onCreateSchedule
}: SearchboxModalProps) {
    const refCities = [
        // 자동완성 검색어
        { id: 1, place: '도쿄' },
        { id: 2, place: '브라질' },
        { id: 3, place: '방콕' },
        { id: 4, place: '부산' },
        { id: 5, place: '베트남' },
        { id: 6, place: '브루클린' },
        { id: 7, place: '벨기에' }
    ];

    const onClickCity = (refCity: string) => {
        if (!selectedCities.includes(refCity)) {
            // 이미 선택된 도시가 아니면
            setSelectedCities((prevCities) => [...prevCities, refCity]); // 배열에 삽입
        }
    };

    const onClickRemoveCity = (city: string) => {
        // 선택된 도시 삭제
        setSelectedCities((prevCities) =>
            prevCities.filter((item) => item !== city)
        );
    };

    const onClickCreateSchedule = () => {
        // 선택된 도시로 일정 생성
        if (selectedCities.length > 0) {
            console.log('선택된 도시들:', selectedCities);
            onCreateSchedule();
            setIsModal(false);
            setSelectedCities(selectedCities);
        }
    };
    if (selectedCities.length > 0) {
        // 도시를 선택한 경우
        return (
            <TransparentModal
                modalMode={1}
                title=''
                setModalState={setIsModal}
                onClickCompleteButton={() => setIsModal(false)}
                completeText=''
            >
                <div className='px-[30px] pt-2'>
                    <div className='border-b border-grey'></div>
                    <div className='p-3.5'>
                        <div className='flex'>
                            {selectedCities.map((city, index) => (
                                <City
                                    key={index}
                                    city={city}
                                    onClick={() => onClickRemoveCity(city)}
                                />
                            ))}
                            <button
                                className='px-3 py-2 rounded-full bg-primary text-[12px]'
                                onClick={onClickCreateSchedule}
                            >
                                일정 생성
                            </button>
                        </div>
                        {refCities.map((refCity, index) => (
                            <div
                                className='border-b border-lightgrey py-[14px]'
                                key={index}
                            >
                                <div className='flex justify-between items-center'>
                                    <div className='flex'>
                                        <BiSearch size={24} className='mr-3' />
                                        {refCity.place}
                                    </div>
                                    <button
                                        className='px-4 py-2 rounded-full bg-lightgrey text-[12px]'
                                        onClick={() =>
                                            onClickCity(refCity.place)
                                        }
                                    >
                                        선택
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </TransparentModal>
        );
    }
    return (
        // 도시 선택 안한 최초 검색창
        <TransparentModal
            modalMode={1}
            title=''
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='px-[30px] pt-2'>
                <div className='border-b border-grey'></div>
                <div className='p-3.5'>
                    {refCities.map((refCity, index) => (
                        <div
                            className='border-b border-lightgrey py-[14px]'
                            key={index}
                        >
                            <div className='flex justify-between items-center'>
                                <div className='flex'>
                                    <BiSearch size={24} className='mr-3' />
                                    {refCity.place}
                                </div>
                                <button
                                    className='px-4 py-2 rounded-full bg-lightgrey text-[12px]'
                                    onClick={() => onClickCity(refCity.place)}
                                >
                                    선택
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TransparentModal>
    );
}

export default SearchboxModal;
