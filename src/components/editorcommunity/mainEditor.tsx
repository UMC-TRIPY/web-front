import Image from "next/image"
import imageAdd from "public/images/imageAdd.svg"
import folderPlus from "public/images/folderPlus.svg"
import calenderAdd from "public/images/calendar.svg"
import mapPin from "public/images/mapPin.svg"

export default function MainEditor() {
    return (
        <div className="mx-4">
            <div className="h-[800px] border border-lightgrey rounded-lg">
                <div className="h-[90px] border-b border-lightgrey">
                    <div className="flex p-5">
                        <button className="mx-3">
                            <Image 
                                src={imageAdd}
                                alt="사진 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1">사진</span>
                        </button>
                        <button className="mx-3">
                            <Image 
                                src={folderPlus}
                                alt="파일 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1">파일</span>
                        </button>
                        <button className="mx-3">
                            <Image 
                                src={calenderAdd}
                                alt="일정 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1">일정</span>
                        </button>
                        <button className="mx-3">
                            <Image 
                                src={mapPin}
                                alt="장소 추가"
                                width={32}
                            />
                            <span className="text-grey pt-1">장소</span>
                        </button>
                    </div>
                </div>
                <div className="p-5 flex h-[710px]">
                    <textarea spellCheck="false" className="flex-grow outline-none" placeholder="내용을 입력해주세요." />
                </div>
            </div>
        </div>
    )
}