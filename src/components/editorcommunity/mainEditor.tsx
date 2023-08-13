import React, { useState } from "react"
import Image from "next/image"
import imageAdd from "public/images/imageAdd.svg"
import folderPlus from "public/images/folderPlus.svg"
import calenderAdd from "public/images/calendar.svg"
import mapPin from "public/images/mapPin.svg"
import EditorModal from "../modal/EditorModal"

interface MainEditorProps {
    cityEmpty: boolean;
}

export default function MainEditor({ cityEmpty }: MainEditorProps) {
    const [contents, setContents] = useState('');
    const [modal, setModal] = useState({
        isOpen: false,
        type: '',
    });

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

    return (
        <div className="mx-4">
            <div className={`h-[800px] border ${!contents && cityEmpty ? 'border-alertred' : 'border-lightgrey'} rounded-lg`}>
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
                        onChange={(e) => setContents(e.target.value)} 
                    />
                </div>
            </div>
        </div>
    )
}