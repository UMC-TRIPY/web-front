import React, { useState, useEffect, useRef } from 'react';
import TransparentModal from './TransparentModal';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

interface SearchboxModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCities: string;
    setSelectedCities: React.Dispatch<React.SetStateAction<string>>;
    results: { id: number; place: string }[];
}

function SearchboxModal({
    setIsModal,
    selectedCities,
    setSelectedCities,
    results
}: SearchboxModalProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number | undefined>(
        undefined
    );

    const onClickCity = (refCity: string) => {
        setIsModal(false);
        setSelectedCities(refCity);
        typeof window! == 'undefined'
            ? sessionStorage.setItem('place', refCity)
            : null;
        setIsExpanded(true); // 검색창 확장
    };

    useEffect(() => {
        // 컨텐츠의 높이를 측정하여 상태에 저장
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, [selectedCities, isExpanded]);

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
