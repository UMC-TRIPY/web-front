import React, { useState } from "react";
import MainEditor from "@/components/editorcommunity/mainEditor";
import SelectCountry from "@/components/editorcommunity/selectCountry";
import TagEditor from "@/components/editorcommunity/tagEditor";
import CommonHeader from "@/components/maincommunity/CommonHeader";
import { updatePosts } from "@/apis/community/update";

export default function EditorCommunity() {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [cityEmpty, setCityEmpty] = useState<boolean>(false);
    const [title, setTitle] = useState(''); // 제목
    const [titleEmpty, setTitleEmpty] = useState<boolean>(false);
    const [contents, setContents] = useState(''); // 내용
    const [contentsEmpty, setContentsEmpty] = useState<boolean>(false);

    /** API 데이터 임시 저장 변수 */
    const [postData, setPostData] = useState({
        user_index: 0,
        post_title: "",
        post_content: "",
        city_index: 0,
        tags: [],
        post_image: "",
        post_file: "",
        plan_index: 0,
    });

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
    console.log("postData:", postData);

    const register = () => {
        updatePosts({
            user_index: postData.user_index,
            post_title: postData.post_title,
            post_content: postData.post_content,
            city_index: postData.city_index,
            tags: postData.tags,
            post_image: postData.post_image,
            post_file: postData.post_file,
            plan_index: postData.plan_index,
        });
    };


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
                postData={postData}
                setPostData={setPostData}
            />
            {/** 첨부파일 모달, 내용 입력 컴포넌트 */}
            <MainEditor 
                contentsEmpty={contentsEmpty}
                onContentsEmptyError={handleContentsEmptyError}
                contents={contents}
                setContents={setContents}
                postData={postData}
                setPostData={setPostData}
            />
            {/** 태그 입력 컴포넌트 */}
            <TagEditor 
                onCityEmptyError={handleCityEmptyError}
                onTitleEmptyError={handleTitleEmptyError}
                onContentsEmptyError={handleContentsEmptyError}
                postData={postData}
                setPostData={setPostData}
            />
            
        </div>
    )
}