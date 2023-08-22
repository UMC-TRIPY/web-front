import React, { useState } from "react";
import MainEditor from "@/components/editorcommunity/mainEditor";
import SelectCountry from "@/components/editorcommunity/selectCountry";
import TagEditor from "@/components/editorcommunity/tagEditor";
import CommonHeader from "@/components/maincommunity/CommonHeader";
import { updatePosts } from "@/apis/community/update";
import ConfirmBtn from "../layout/confirmBtn";

export default function EditorCommunity() {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [cityEmpty, setCityEmpty] = useState<boolean>(false);
    const [title, setTitle] = useState(''); // 제목
    const [titleEmpty, setTitleEmpty] = useState<boolean>(false);
    const [contents, setContents] = useState(''); // 내용
    const [contentsEmpty, setContentsEmpty] = useState<boolean>(false);
    const [tagList, setTagList] = useState<string[]>([]);
    const [tagEmpty, setTagEmpty] = useState<boolean>(false);

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
    /** 태그란이 비었을 때 경고메시지 출력 */
    function handleTagEmptyError() {
        if (tagList.length === 0){
            setTagEmpty(true);
        }
        else {
            setTagEmpty(false);
        }
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
                postData={postData}
                setPostData={setPostData}
                tagList={tagList}
                setTagList={setTagList}
                tagEmpty={tagEmpty}
                setTagEmpty={setTagEmpty}
            />
            <div className="flex justify-center">
                <ConfirmBtn label="임시저장" color="bg-lightgrey"/>
                <ConfirmBtn 
                    label="등록하기" 
                    color="bg-primary" 
                    onClick={() => { // 눌렀을 때
                        handleCityEmptyError(); // 도시 게시판 선택했는지
                        handleTitleEmptyError(); // 타이틀이 비었는지
                        handleContentsEmptyError(); // 내용이 비었는지
                        handleTagEmptyError(); // 태그가 비었는지
                        // register(); // 제출
                        // TODO: 제출시 오류처리
                    }}
                />
            </div>
        </div>
    )
}