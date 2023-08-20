import React, { useState, useCallback } from "react"
import Image from "next/image"
import imageAdd from "public/images/imageAdd.svg"
import folderPlus from "public/images/folderPlus.svg"
import calenderAdd from "public/images/calendar.svg"
import mapPin from "public/images/mapPin.svg"
import folder from "public/images/folder.svg"
import EditorModal from "../modal/EditorModal"
import { BiX } from "react-icons/bi"

interface MainEditorProps {
    contentsEmpty: boolean;
    onContentsEmptyError: () => void;
    contents: string;
    setContents: (value: string) => void;
    postData: any;
    setPostData: (data: any) => void;
}

export default function MainEditor({ 
    contentsEmpty, 
    onContentsEmptyError, 
    contents, 
    setContents,
    postData,
    setPostData,
}: MainEditorProps) {
    const [modal, setModal] = useState({
        isOpen: false,
        type: '',
    });

    /** textarea 입력 handle 함수 */
    const handleContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = e.target.value;
        setContents(newContent);
        setPostData({
          ...postData,
          post_content: newContent,
        });
        onContentsEmptyError();
    };
      

    /** 각 type에 맞는 모달창 열기 */
    const handleModalOpen = (modalType: string) => {
        setModal({
            isOpen: true,
            type: modalType,
        });
    };

    const handleModalClose = () => {
        setModal({
            isOpen: false,
            type: '',
        });
    };

    /** 이미지 URL을 textarea에 */
    const handleImageUpload = (images: File[]) => {
        // 이미지 URL로 postData 업데이트
        let imageUrls = images.map((image) => URL.createObjectURL(image));
        setPostData({
            ...postData,
            post_image: imageUrls.join(","),
        });

    };

    const [filePreviews, setFilePreviews] = useState<File[]>([]);
    /** 파일 URL을 textarea에 */
    const handleFileUpload = (files: File[]) => { // uploadedFiles 배열
        // 파일 URL로 postData 업데이트
        const fileUrls = files.map((file) => URL.createObjectURL(file));
        setPostData({
            ...postData,
            post_file: fileUrls.join(","),
        });
        setFilePreviews([...filePreviews, ...files]);
        // filePreviews에 uploadedFiles 추가
    };

    const handleRemoveUploadedFile = (index: number) => {
        setFilePreviews(filePreviews.filter((_, i) => i !== index));
    };

    /** 선택된 장소 id를 textarea에 */
    const handlePlaceUpload = () => {
        // 선택한 항목으로 postData 업데이트
        setPostData({
            ...postData,
            plan_index: checkedItems,
        });
    };

    const [checkedItems, setCheckedItems] = useState<Array<number>>([]);


    return (
        <div className="mx-4">
            {filePreviews && (
                <>
                {filePreviews.map((file, index) => (
                    <div className="flex items-center mb-5" key={index}>
                    <span>파일</span>
                    <div className="flex items-center justify-between ml-5 px-4 py-3 h-12 flex-grow border border-lightgrey rounded-lg">
                        <div className="flex">
                        <Image src={folder} alt="파일 아이콘" sizes="24" className="mr-4" />
                        <span>{file.name}</span>
                        </div>
                        <button onClick={() => handleRemoveUploadedFile(index)}>
                            <BiX size={24} />
                        </button>
                    </div>
                </div>
                ))}
                </>
            )}
            <div className={`h-[800px] border ${!contents && contentsEmpty ? 'border-alertred' : 'border-lightgrey'} rounded-lg`}>
                <div className="h-[90px] border-b border-lightgrey">
                    <div className="flex p-5">
                        <button 
                            className="mx-3"
                            onClick={() => handleModalOpen('사진')}
                        >
                            <Image 
                                src={imageAdd}
                                alt="사진 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">사진</span>
                        </button>
                        <button 
                            className="mx-3"
                            onClick={() => handleModalOpen('파일')}
                        >
                            <Image 
                                src={folderPlus}
                                alt="파일 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">파일</span>
                        </button>
                        <button 
                            className="mx-3"
                            onClick={() => handleModalOpen('일정')}
                        >
                            <Image 
                                src={calenderAdd}
                                alt="일정 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">일정</span>
                        </button>
                        <button 
                            className="mx-3"
                            onClick={() => handleModalOpen('장소')}
                        >
                            <Image 
                                src={mapPin}
                                alt="장소 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">장소</span>
                        </button>
                    </div>
                    {modal.isOpen && (
                        <div>
                            <EditorModal
                                type = {modal.type}
                                setIsModal = {() => handleModalClose()}
                                onImageUpload = {handleImageUpload}
                                onFileUpload = {handleFileUpload}
                                onPlaceUpload = {handlePlaceUpload}
                                checkedItems={checkedItems} 
                                setCheckedItems={setCheckedItems}
                            />
                        </div>
                    )}
                </div>
                <div className="p-5 flex h-[710px]">
                <textarea 
                    spellCheck="false" 
                    className="flex-grow outline-none" 
                    placeholder="내용을 입력해주세요." 
                    value={postData.post_content}
                    onChange={(e) => handleContents(e)} 
                />
                </div>
            </div>
        </div>
    )
}