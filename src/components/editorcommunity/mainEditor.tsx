import React, { useState } from "react"
import Image from "next/image"
import imageAdd from "public/images/imageAdd.svg"
import folderPlus from "public/images/folderPlus.svg"
import calenderAdd from "public/images/calendar.svg"
import mapPin from "public/images/mapPin.svg"

interface MainEditorProps {
    cityEmpty: boolean;
    onCityEmptyError: () => void;
}

export default function MainEditor({ cityEmpty, onCityEmptyError }: MainEditorProps) {
    const [contents, setContents] = useState('');

    return (
        <div className="mx-4">
            <div className={`h-[800px] border ${!contents && cityEmpty ? 'border-alertred' : 'border-lightgrey'} rounded-lg`}>
                <div className="h-[90px] border-b border-lightgrey">
                    <div className="flex p-5">
                        <button className="mx-3">
                            <Image 
                                src={imageAdd}
                                alt="사진 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">사진</span>
                        </button>
                        <button className="mx-3">
                            <Image 
                                src={folderPlus}
                                alt="파일 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">파일</span>
                        </button>
                        <button className="mx-3">
                            <Image 
                                src={calenderAdd}
                                alt="일정 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">일정</span>
                        </button>
                        <button className="mx-3">
                            <Image 
                                src={mapPin}
                                alt="장소 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1 text-xs">장소</span>
                        </button>
                    </div>
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