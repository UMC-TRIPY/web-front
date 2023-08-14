import React, { useState } from "react";
import MainEditor from "@/components/editorcommunity/mainEditor";
import SelectCountry from "@/components/editorcommunity/selectCountry";
import TagEditor from "@/components/editorcommunity/tagEditor";
import CommonHeader from "@/components/maincommunity/CommonHeader";

export default function EditorCommunity() {
    // selectedCity에 선택한 도시 카테고리가 저장 -> 게시판 필터링시 전달필요
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [cityEmpty, setCityEmpty] = useState<boolean>(false);
    const [title, setTitle] = useState(''); // 제목
    const [titleEmpty, setTitleEmpty] = useState<boolean>(false);
    const [contents, setContents] = useState(''); // 내용
    const [contentsEmpty, setContentsEmpty] = useState<boolean>(false);

    // tagEditor의 버튼 눌렀을 때 호출되는 함수들
    /** selectedCity가 비었을때 setCityEmpty를 true로 */
    function handleCityEmptyError() {
        setCityEmpty(!selectedCity); 
    }
    /** title 미입력시 setTitleEmpty를 true로 */
    function handleTitleEmptyError() {
        setTitleEmpty(!title);
    }
    /** Contents 미입력시 setContentsEmpty를 true로 */
    function handleContentsEmptyError() {
        setContentsEmpty(!contents);
    }
    
    return (
        <div>
            <CommonHeader />
            {/** 도시 카테고리 선택, 제목 입력 컴포넌트 */}
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
            {/** 첨부파일 모달, 내용 입력 컴포넌트 */}
            <MainEditor 
                contentsEmpty={contentsEmpty}
                onContentsEmptyError={handleContentsEmptyError}
                contents={contents}
                setContents={setContents}
            />
            {/** 태그 입력 컴포넌트 */}
            <TagEditor 
                onCityEmptyError={handleCityEmptyError}
                onTitleEmptyError={handleTitleEmptyError}
                onContentsEmptyError={handleContentsEmptyError}
            />
        </div>
    )
}