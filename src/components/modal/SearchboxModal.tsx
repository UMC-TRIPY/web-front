import React, { useState, useEffect, useRef } from 'react';
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
    inputCity: string;
}

function SearchboxModal({
    setIsModal,
    selectedCities,
    setSelectedCities,
    onCreateSchedule,
    inputCity,
}: SearchboxModalProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

    const refCities: { id: number; place: string }[] = [
        // 자동완성 검색어 원본
        { id: 1, place: '도쿄' },
        { id: 2, place: '브라질' },
        { id: 3, place: '방콕' },
        { id: 4, place: '부산' },
        { id: 5, place: '베트남' },
        { id: 6, place: '브루클린' },
        { id: 7, place: '벨기에' },
        { id: 8, place: '오사카'},
        { id: 9, place: '오키나와'},
        { id: 10, place: '대구'},
        { id: 11, place: '대전'},
        { id: 12, place: '다낭'},
        { id: 13, place: '인천'},
    ];

    // 자동완성된 결과를 담는 배열 results
    const [results, setResults] = useState<{ id: number; place: string }[]>([]);
    useEffect(() => {
        const filteredResults = refCities.filter((refCity) =>
            refCity.place.includes(inputCity)
        );
        setResults(filteredResults);
    }, [inputCity]);

    const onClickCity = (refCity: string) => {
        if (!selectedCities.includes(refCity)) {
            // 이미 선택된 도시가 아니면
            setSelectedCities((prevCities) => [...prevCities, refCity]); // 배열에 삽입
            setIsExpanded(true); // 검색창 확장
        }
    };

    const onClickRemoveCity = (city: string) => {
        // 선택된 도시 삭제
        setSelectedCities((prevCities) =>
            prevCities.filter((item) => item !== city)
        );
        if (selectedCities.length <= 0) {
            setIsExpanded(false); // 선택된 도시가 없으면 다시 축소
        }
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

    useEffect(() => {
        // 컨텐츠의 높이를 측정하여 상태에 저장
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, [selectedCities, isExpanded]);

    if (selectedCities.length > 0) {
        // 도시를 선택한 경우
        return (
            <TransparentModal
                modalMode={1}
                title=''
                setModalState={setIsModal}
                onClickCompleteButton={() => setIsModal(false)}
                completeText=''
                contentHeight={isExpanded ? contentHeight : undefined}
            >
                <div className={`px-[30px] pt-2 ${isExpanded ? 'pb-0.5' : ''}`}>
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
                        {results.slice(0, 7).map((result, index) => (
                            <div
                                className='border-b border-lightgrey py-[14px]'
                                key={index}
                            >
                                <div className='flex justify-between items-center'>
                                    <div className='flex'>
                                        <BiSearch size={24} className='mr-3' />
                                        {result.place}
                                    </div>
                                    <button
                                        className='px-4 py-2 rounded-full bg-lightgrey text-[12px]'
                                        onClick={() =>
                                            onClickCity(result.place)
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
            contentHeight={isExpanded ? contentHeight : undefined}
        >
            <div className={`px-[30px] pt-2 ${isExpanded ? 'pb-0.5' : ''}`}>
                <div className='border-b border-grey'></div>
                <div className='p-3.5'>
                    {results.slice(0, 7).map((result, index) => (
                        <div
                            className='border-b border-lightgrey py-[14px]'
                            key={index}
                        >
                            <div className='flex justify-between items-center'>
                                <div className='flex'>
                                    <BiSearch size={24} className='mr-3' />
                                    {result.place}
                                </div>
                                <button
                                    className='px-4 py-2 rounded-full bg-lightgrey text-[12px]'
                                    onClick={() => onClickCity(result.place)}
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
