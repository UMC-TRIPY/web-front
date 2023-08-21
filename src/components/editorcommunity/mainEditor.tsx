import React, { useState, useCallback } from "react"
import Image from "next/image"
import imageAdd from "public/images/imageAdd.svg"
import folderPlus from "public/images/folderPlus.svg"
import calenderAdd from "public/images/calendar.svg"
import mapPin from "public/images/mapPin.svg"
import folder from "public/images/folder.svg"
import EditorModal from "../modal/EditorModal"
import { BiX } from "react-icons/bi"
import BlockSchedule from "../detailschedule/BlockSchedule"
import SchedulePreviews from "./schedulePreviews"

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

    const [imagePreviews, setImagePreviews] = useState<File[]>([]);
    /** 이미지 URL을 postData에 */
    const handleImageUpload = (images: File[]) => {
        let imageUrls = images.map((image) => URL.createObjectURL(image));
        
        // 기존 파일 목록에 합침
        const updatedPostImage = [postData.post_image, ...imageUrls].join(",");

        setPostData({
            ...postData,
            post_image: updatedPostImage,
        });
        // imagePreviews에 uploadedImage 추가
        setImagePreviews([...imagePreviews, ...images]);
    };

    const handleRemoveUploadedImage = (index: number) => {
        const updatedImagePreviews = [...imagePreviews];
        updatedImagePreviews.splice(index, 1); // 파일 미리보기에서 해당 인덱스의 파일 제거
    
        const updatedImageUrls = updatedImagePreviews.map((image) => URL.createObjectURL(image));
    
        setImagePreviews(updatedImagePreviews);
    
        // postData 업데이트
        setPostData({
            ...postData,
            post_image: updatedImageUrls.join(","),
        });
    };

    const [filePreviews, setFilePreviews] = useState<File[]>([]);
    /** 파일 URL을 postData에 */
    const handleFileUpload = (files: File[]) => {
        const fileUrls = files.map((file) => URL.createObjectURL(file));
        
        // 기존 파일 목록에 합침
        const updatedPostFile = [postData.post_file, ...fileUrls].join(",");
        
        setPostData({
            ...postData,
            post_file: updatedPostFile,
        });
        // filePreviews에 uploadedFiles 추가
        setFilePreviews([...filePreviews, ...files]);
    };

    const handleRemoveUploadedFile = (index: number) => {
        const updatedFilePreviews = [...filePreviews];
        updatedFilePreviews.splice(index, 1); // 파일 미리보기에서 해당 인덱스의 파일 제거
    
        const updatedFileUrls = updatedFilePreviews.map((file) => URL.createObjectURL(file));
    
        setFilePreviews(updatedFilePreviews);
    
        // postData 업데이트
        setPostData({
            ...postData,
            post_file: updatedFileUrls.join(","),
        });
    };

    /** 선택된 일정 id를 postData에 */
    const handlePlanUpload = () => {
        setPostData({
            ...postData,
            plan_index: checkedItems,
        });
    };

    const [checkedItems, setCheckedItems] = useState<Array<number>>([]);

    return (
        <div className="mx-4">
            {/** post_file 갯수만큼 파일 컴포넌트 */}
            {postData.post_file && (
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
            {/** plan_index의 갯수만큼 일정 block 생성 */}
            {postData.plan_index.length > 0 && (
                checkedItems.map((plan, index) => (
                    <div key={index} className="flex h-96 border border-lightgrey rounded-lg mb-5">
                        <SchedulePreviews  />
                    </div>
                ))
            )}
            <div className={`h-[800px] border ${!contents && contentsEmpty ? 'border-alertred' : 'border-lightgrey'} rounded-lg mb-5`}>
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
                                onPlanUpload = {handlePlanUpload}
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
            {postData.post_image && (
                <div className="flex flex-row mb-5 overflow-x-auto">
                {imagePreviews.map((image, index) => (
                    <div key={index} className="relative">
                        <div className="flex justify-center items-center relative h-40 w-40 border border-lightgrey rounded-lg mr-5">
                            <button 
                                className="absolute top-0 right-0"
                                onClick={() => handleRemoveUploadedImage(index)}>
                                <BiX size={24} className="z-2"/>
                                <div className="z-0 bg-white opacity-50 absolute inset-0"></div>
                            </button>
                            <img
                                src={URL.createObjectURL(image)}
                                alt="thumbnail"
                                className="h-40 p-2"
                            />
                        </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}