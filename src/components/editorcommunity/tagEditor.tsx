import React, { useState, useEffect } from "react"
import Image from "next/image";
import alertCircle from "public/images/alertCircle.svg" 
import alertCircleRed from "public/images/alertCircleRed.svg"
import ConfirmBtn from "../layout/confirmBtn";

interface TagEditorProps {
    onCityEmptyError: () => void;
    onTitleEmptyError: () => void;
    onContentsEmptyError: () => void;
    postData: any;
    setPostData: (data: any) => void;
}

export default function TagEditor({
    onCityEmptyError, 
    onTitleEmptyError, 
    onContentsEmptyError,
    postData,
    setPostData,
}: TagEditorProps) {
    const [tagItem, setTagItem] = useState<string>('');
    const [tagList, setTagList] = useState<string[]>([]);
    const [tagEmpty, setTagEmpty] = useState<boolean>(false);

    useEffect(() => {
        // tagList가 변경될 때마다 postData의 tags를 업데이트
        setPostData({
            ...postData,
            tags: tagList,
        });
    }, [tagList]);

    /** enter 누르면 submitTagItem 함수 불러옴 */
    function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length !== 0 && e.key === 'Enter') {
            submitTagItem()
        }
    }

    /** 태그 추가 */
    function submitTagItem() {
        if (!tagList.includes(tagItem)){ // 중복 태그 추가 안함
            let updateTagList = [...tagList];
            updateTagList.push(tagItem);
            setTagList(updateTagList);
            setTagItem('');
        }
        if (tagList.length === 0){
            setTagEmpty(false);
        }
    }

    /** 선택한 태그 삭제 */
    function deleteTagItem(tag: string) {
        const deletedTagList = tagList.filter((tagItem) => tagItem !== tag)
        setTagList(deletedTagList)
        console.log(tagList)
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

    return (
        <div className="mx-4">
            <div className={`flex items-center overflow-x-hidden whitespace-nowrap border ${tagEmpty ? 'border-alertred' : 'border-lightgrey'} rounded-lg my-3`}>
                <div className="mx-2">
                {tagList.map((tag, index) => {
                    return (
                        <button 
                            key={index}
                            className="inline-block bg-primary px-4 py-2 mx-2 my-3 rounded-full" 
                            onClick={() => deleteTagItem(tag)}
                        >
                            {tag}
                        </button>
                    )
                })}
                </div>
                <input 
                    type="text"
                    onKeyDown={onKeyPress}
                    value={tagItem}
                    onChange={e => setTagItem(e.currentTarget.value)}
                    placeholder="#태그를 입력해주세요."
                    className="h-16 w-full outline-none"
                />
            </div>
            <div className="flex">
                <Image 
                    src={tagEmpty ? alertCircleRed : alertCircle } 
                    alt="경고" 
                    width={20}
                />
                <span className={`px-2 ${tagEmpty ? 'text-alertred' : 'text-dark-black'}`}>
                    최소 한 개 이상의 태그를 입력해주세요.
                </span>
            </div>
            <div className="flex justify-center">
                <ConfirmBtn label="임시저장" color="bg-lightgrey"/>
                <ConfirmBtn 
                    label="등록하기" 
                    color="bg-primary" 
                    onClick={() => { // 눌렀을 때
                        onCityEmptyError(); // 도시 게시판 선택했는지
                        onTitleEmptyError(); // 타이틀이 비었는지
                        onContentsEmptyError(); // 내용이 비었는지
                        handleTagEmptyError(); // 태그가 비었는지
                    }}
                />
            </div>
        </div>
    )
}