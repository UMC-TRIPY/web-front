import React, { useState } from "react"
import Image from "next/image"
import imageAdd from "public/images/imageAdd.svg"
import folderPlus from "public/images/folderPlus.svg"
import calenderAdd from "public/images/calendar.svg"
import mapPin from "public/images/mapPin.svg"
import EditorModal from "../modal/EditorModal"

interface MainEditorProps {
    contentsEmpty: boolean;
    onContentsEmptyError: () => void;
    contents: string;
    setContents: (value: string) => void;
}

export default function MainEditor({ contentsEmpty, onContentsEmptyError, contents, setContents }: MainEditorProps) {
    const [modal, setModal] = useState({
        isOpen: false,
        type: '',
    });

    /** textarea 입력 handle 함수 */
    const handleContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
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
        let imgTags = images.map((image) => `![${image.name}](URL.createObjectURL(image))`).join('\n');
        setContents(contents + '\n' + imgTags);
        // contents에 img URL 추가
    };

    /** 파일 URL을 textarea에 */
    const handleFileUpload = (files: File[]) => {
        let fileTags = files.map((file) => `[${file.name}](URL.createObjectURL(file))`).join('\n');
        setContents(contents + '\n' + fileTags);
        // contents에 file URL 추가
    };

    return (
        <div className="mx-4">
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
                            />
                        </div>
                    )}
                </div>
                <div className="p-5 flex h-[710px]">
                    <textarea 
                        spellCheck="false" 
                        className="flex-grow outline-none" 
                        placeholder="내용을 입력해주세요." 
                        value={contents}
                        onChange={(e) => handleContents(e)} 
                    />
                </div>
            </div>
        </div>
    )
}