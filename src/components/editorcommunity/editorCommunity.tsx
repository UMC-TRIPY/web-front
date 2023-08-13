import React, { useState } from "react";
import MainEditor from "@/components/editorcommunity/mainEditor";
import SelectCountry from "@/components/editorcommunity/selectCountry";
import TagEditor from "@/components/editorcommunity/tagEditor";
import CommonHeader from "@/components/maincommunity/CommonHeader";

export default function EditorCommunity() {
    const [cityEmpty, setCityEmpty] = useState<boolean>(false);
    const [selectedCity, setSelectedCity] = useState<string>("");
    // selectedCity에 선택한 여행지 저장 -> 게시판 필터링시 전달필요

    function handleCityEmptyError() {
        setCityEmpty(!selectedCity);
    }
    
    return (
        <div>
            <CommonHeader />
            <SelectCountry 
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                cityEmpty={cityEmpty}
                onCityEmptyError={handleCityEmptyError}
            />
            <MainEditor />
            <TagEditor 
                onCityEmptyError={handleCityEmptyError}
            />
        </div>
    )
}