// SearchboxModal.tsx
import React from 'react';
import TransparentModal from './TransparentModal';
import { BiSearch } from 'react-icons/bi';

function City() {
    const refCities = [ // 자동완성 검색어
        { id: 1, place: '바르셀로나' },
        { id: 2, place: '브라질' },
        { id: 3, place: '방콕' },
        { id: 4, place: '부산' },
        { id: 5, place: '베트남' },
        { id: 6, place: '브루클린' },
        { id: 7, place: '벨기에' },
    ];
    const onClick = (refCity: string) => {
        alert(`${refCity} 담기 완료!`);
    };

    return (
        <div>
            {refCities.map((refCity, index) => {
                return (
                    <div className="border-b border-lightgrey py-[14px]" key={index}>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <BiSearch size={24} className='mr-3' />
                                {refCity.place}
                            </div>
                            <button 
                                className='px-4 py-2 rounded-full bg-lightgrey'
                                onClick={() => onClick(refCity.place)}>
                                <div className='text-[12px]'>선택</div>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function SearchboxModal ({ setIsModal }: any) {
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
                    <City />
                </div>
            </div>
        </TransparentModal>
    );
};

export default SearchboxModal;
