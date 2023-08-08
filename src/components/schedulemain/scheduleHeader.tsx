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
    scheduleCreated: boolean;
    setScheduleCreated: React.Dispatch<React.SetStateAction<boolean>>;
}

function ScheduleHeader ({ 
    selectedCities, 
    setSelectedCities, 
    onCreateSchedule,
    scheduleCreated, 
    setScheduleCreated
}: ScheduleHeaderProps) {
    // 모달 상태 제어
    const [modal, setModal] = useState(false);
    const [place, setPlace] = useState<string>('');
    
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

    const results = refCities
        .filter((t) => t.place[0].includes(place[0]))
        .filter((t) => t.place.includes(place.replace(/ /g, '')));

    const length = results.length === 0 ? true : false;

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
                        value={place}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPlace(e.target.value)
                        }
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
                        results={results}
                        scheduleCreated={scheduleCreated}
                        setScheduleCreated={setScheduleCreated}
                    />
                </div>
            )}
        </div>
    )
}

export default ScheduleHeader;