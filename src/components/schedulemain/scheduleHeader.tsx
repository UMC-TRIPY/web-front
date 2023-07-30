// scheduleHeader.tsx

import { BiSearch, BiX } from "react-icons/bi";
import { useState } from "react";
import SearchboxModal from "../modal/SearchboxModal";


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
                    <div className="border border-grey rounded-full mx-2" key={index}>
                        <div className="flex px-2 py-1 text-[12px]">
                            {searchedCities[index]}
                            <button
                                className="px-1"
                                onClick={() => onClick(searchedCity)}
                            >
                                <BiX 
                                    size={16}
                                />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ScheduleHeader () {
    // 모달 상태 제어
    const [modal, setModal] = useState(false);

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
                    />
                    <BiSearch   
                            size={32}
                            className='absolute right-0 bottom-5 mr-5 hover:cursor-pointer'
                    />
                </div>
                <div className="flex my-[25px] items-center">
                    최근 검색어
                    <div className="mx-2">
                        <City /> {/* 최근 검색어 map으로 출력 */}
                    </div>
                </div>
            </div>
            {modal && (
                <div className="flex justify-center items-center">
                    <SearchboxModal setIsModal={setModal} />
                </div>
            )}
        </div>
    )
}

export default ScheduleHeader;