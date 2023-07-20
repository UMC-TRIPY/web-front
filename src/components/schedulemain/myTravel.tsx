import React, { useState } from "react";
import RoundBtn from "../layout/roundBtn";

function MyTravel () {
    const [currentPage, setCurrentPage] = useState(1);
    const [travelsPerPage] = useState(8);
    const [travels, setTravels] = useState<string[][]>([
        ["2023.06.30~2023.07.02 (2박 3일)", "부산"],
        ["2023.05.09~2023.05.11 (2박 3일)", "바르셀로나, 세비야"],
        ["2023.05.09~2023.05.11 (2박 3일)", "파리, 런던"],
        ["2023.05.09~2023.05.11 (2박 3일)", "오사카, 나라, 교토"],
        ["2023.05.09~2023.05.11 (2박 3일)", "방콕"],
        ["2023.05.09~2023.05.11 (2박 3일)", "싱가폴, 말레이시아"],
        ["2023.05.09~2023.05.11 (2박 3일)", "제주도"],
        ["2023.05.09~2023.05.11 (2박 3일)", "도쿄"],
        ["2023.05.09~2023.05.11 (2박 3일)", "어디어디"],
        ["언제언제", "어디어디"],
        ["언제언제", "어디어디"],
        ["언제언제", "어디어디"],
        ["언제언제", "어디어디"],
    ]);
    const handlePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    };
    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    };

    const indexOfLastTravel = currentPage * travelsPerPage;
    const indexOfFirstTravel = indexOfLastTravel - travelsPerPage;
    const currentTravels = travels.slice(indexOfFirstTravel, indexOfLastTravel);
    return (
        <div className="mx-4 mt-16">
            <div className="text-3xl font-bold mb-5">
                내 여행 목록
            </div>
            <div className="rounded-md bg-brightgrey">
                <div className="border-b border-b-lightgrey py-5">
                    <div className="flex justify-between">
                        <div className="w-1/3 text-center"><p>일정</p></div>
                        <div className="w-1/3 text-center"><p>장소</p></div>
                        <div className="w-1/3 text-center"><p>관리하기</p></div>
                    </div>    
                </div>
                <div className="py-5">
                    {currentTravels.map((travel, index) => (
                    <div className="flex items-center justify-between py-[16.5px]">
                        <div className="w-1/3 text-center">
                            {travel[0]}
                        </div>
                        <div className="w-1/3 text-center">
                            {travel[1]}
                        </div>
                        <div className="flex w-1/3 justify-center">
                            <RoundBtn label="상세보기" color="bg-lightgrey" />
                            <RoundBtn label="수정하기" color="bg-lightgrey" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center m-8 text-grey">
                <button className="mx-4 px-2" onClick={handlePrevClick} disabled={currentPage === 1}>
                    &lt;
                </button>
                {currentPage}
                <button className="mx-4 px-2" onClick={handleNextClick} disabled={indexOfLastTravel >= travels.length}>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default MyTravel;