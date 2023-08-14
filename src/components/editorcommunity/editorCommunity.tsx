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
        // selectedCity가 비었을때 setCityEmpty를 true로
    }

    const [title, setTitle] = useState(''); // 제목
    const [titleEmpty, setTitleEmpty] = useState<boolean>(false);
    function handleTitleEmptyError() {
        setTitleEmpty(!title);
    }
 
    const [contents, setContents] = useState(''); // 내용
    const [contentsEmpty, setContentsEmpty] = useState<boolean>(false);
    function handleContentsEmptyError() {
        setContentsEmpty(!contents);
    }
    
    return (
        <div>
            <CommonHeader />
            <SelectCountry 
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                cityEmpty={cityEmpty}
                onCityEmptyError={handleCityEmptyError}
                title={title}
                setTitle={setTitle}
                titleEmpty={titleEmpty}
                onTitleEmptyError={handleTitleEmptyError}
            />
            <MainEditor 
                contentsEmpty={contentsEmpty}
                onContentsEmptyError={handleContentsEmptyError}
                contents={contents}
                setContents={setContents}
            />
            <TagEditor 
                onCityEmptyError={handleCityEmptyError}
                onTitleEmptyError={handleTitleEmptyError}
                onContentsEmptyError={handleContentsEmptyError}
            />
        </div>
    )
}