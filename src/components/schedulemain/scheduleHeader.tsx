import React, { useState } from "react";
import SearchboxModal from "../modal/SearchboxModal";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from 'react-icons/rx';


function City () {
    const searchedCities = [ // 최근 검색어
        '부산',
        '홍콩',
        '도쿄',
    ];
    const onClick = (searchedCity: string) => {
        alert(`${searchedCity} 삭제 완료!`);
    };

    return (
        <div className="flex">
            {searchedCities.map((searchedCity, index) => {
                return (
                    <div className="border border-grey rounded-full mr-2" key={index}>
                        <div className="flex px-3 py-2 text-[12px]">
                            {searchedCities[index]}
                            <button
                                className="pl-2 pb-0.5" // RxCross가 중앙에 위치하기 위해 pb-0.5
                                onClick={() => onClick(searchedCity)}
                            >
                                <RxCross1 size={12}/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

interface ScheduleHeaderProps {
    selectedCities: string[];
    setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
    onCreateSchedule: () => void;
}

function ScheduleHeader ({ selectedCities, setSelectedCities, onCreateSchedule }: ScheduleHeaderProps) {
    // 모달 상태 제어
    const [modal, setModal] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex justify-center">
            <div className="flex-col text-center">
                <div className="font-bold text-5xl my-20">
                    여행일정을 등록해볼까요?
                </div>
                <div className="flex relative justify-center">
                    <input 
                        className="border-b border-grey w-[630px] pb-5 pl-5 focus:outline-none"
                        type="text" 
                        placeholder="여행일정을 생성할 도시를 입력하세요"
                        onClick={() => setModal(true)}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <BiSearch   
                            size={32}
                            className='absolute right-0 bottom-5 mr-5 hover:cursor-pointer'
                    />
                </div>
                <div className="flex my-[25px] items-center">
                    <span className="mr-2">최근 검색어</span>
                    <div className="mx-2">
                        <City /> {/* 최근 검색어 map으로 출력 */}
                    </div>
                </div>
            </div>
            {modal && (
                <div className="flex justify-center items-center">
                    <SearchboxModal 
                        setIsModal={setModal} 
                        selectedCities={selectedCities} 
                        setSelectedCities={setSelectedCities} 
                        onCreateSchedule={() => {}}
                        inputCity={inputValue}
                    />
                </div>
            )}
        </div>
    )
}

export default ScheduleHeader;