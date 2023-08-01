import React, { useState } from "react"
interface HotSearchProps {
    selectedCities: string[];
}
export default function HotSearch(props: HotSearchProps) {
    const [cities, setCities] = useState([
        "런던",
        "제주도",
        "대만",
        "도쿄",
        "하와이",
    ])
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    return (
        <div className="flex flex-col bg-brightgrey rounded-md px-[33px] py-2.5 mx-4">
            <div className="py-2.5">
                인기 검색어
            </div>
            <div className="flex flex-col">
                {cities.map((city, index) => (
                    <div key={index} className="flex items-start py-2.5">
                        <span className="text-grey mr-4">{index + 1}</span>
                        <button>{city}</button>
                    </div>
                ))}
            </div>
            {/* 추가: 선택된 도시 출력 */}    
            {selectedCities.length > 0 && (
            <div className="py-2.5">선택된 도시: {selectedCities.join(", ")}</div>
            )}
        </div>
        
    )
}