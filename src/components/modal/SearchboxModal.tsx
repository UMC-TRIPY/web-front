// SearchboxModal.tsx
import React, { useState } from 'react';
import TransparentModal from './TransparentModal';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import DetailBox from '../schedulemain/detailBox';
import HotSearch from '../schedulemain/hotSearch';

interface CityProps {
    selectedCities: string[];
    setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
}

function City({ selectedCities, setSelectedCities }: CityProps) {
    const refCities = [ // 자동완성 검색어
        { id: 1, place: '바르셀로나' },
        { id: 2, place: '브라질' },
        { id: 3, place: '방콕' },
        { id: 4, place: '부산' },
        { id: 5, place: '베트남' },
        { id: 6, place: '브루클린' },
        { id: 7, place: '벨기에' },
    ];
    const [isCreatingSchedule, setIsCreatingSchedule] = useState<boolean>(false);
    const onClick = (refCity: string) => {
        if (!selectedCities.includes(refCity)) { // 이미 선택된 도시가 아니면
            setSelectedCities(prevCities => [...prevCities, refCity]); // 배열에 삽입
        }
    };
    const onRemoveCity = (city: string) => { // 선택된 도시 삭제
        setSelectedCities(prevCities => prevCities.filter(item => item !== city));
    };
    const onCreateSchedule = () => { // 선택된 도시로 일정 생성
        console.log('선택된 도시들:', selectedCities);
        setIsCreatingSchedule(true);
    };

    if (selectedCities.length > 0) { // 도시를 선택한 경우
        return (
            <div>
                <div className='flex'>
                    {selectedCities.map((city, index) => (
                        <div className='flex text-center px-3 py-2 mr-2 rounded-full border border-grey text-[12px] text-darkgrey' key={index}>
                            {city}
                            <button 
                                className='pl-2 pb-0.5' // RxCross가 중앙에 위치하기 위해 pb-0.5
                                onClick={() => onRemoveCity(city)}
                            >
                                <RxCross1 size={12}/>
                            </button>
                        </div>
                    ))}
                    <button 
                        className='px-3 py-2 rounded-full bg-primary text-[12px]'
                        onClick={onCreateSchedule} // 배열에 담긴 도시들을 모달창 밖에 출력하고싶어요
                        >
                        일정 생성
                    </button>
                </div>
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
                                        className='px-4 py-2 rounded-full bg-lightgrey text-[12px]'
                                        onClick={() => onClick(refCity.place)}>
                                        선택
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    } 
    return ( // 도시 선택 안한 최초 검색창
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
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [isCreatingSchedule, setIsCreatingSchedule] = useState<boolean>(false);

    const handleCreateSchedule = () => {
        setIsCreatingSchedule(true);
    };
    
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
                    <City
                        selectedCities={selectedCities} // City 컴포넌트에 선택된 도시들을 props로 전달
                        setSelectedCities={setSelectedCities} // City 컴포넌트에서 선택된 도시들을 수정하는 함수를 props로 전달
                    />
                </div>
            </div>
             {/* 일정 생성 버튼 */}
      <div className="flex justify-center mt-4">
        {!isCreatingSchedule ? (
          <button
            className="px-3 py-2 rounded-full bg-primary text-[12px]"
            onClick={handleCreateSchedule}
          >
            일정 생성
          </button>
        ) : (
          <div className="mt-4 p-3 border border-grey rounded">
            <p>선택된 도시들:</p>
            <ul>
              {selectedCities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
        </TransparentModal>
    );
};

export default SearchboxModal;
