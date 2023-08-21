import React, { useState, useRef } from "react";
import Modal from "./Modal";
import Image from "next/image";
import alertCircle from "public/images/alertCircle.svg" 
import upload from "public/images/upload.svg"
import folder from "public/images/folder.svg"
import { BiX } from "react-icons/bi";
import ConfirmBtn from "../layout/confirmBtn";
import MyTravel from "../schedulemain/myTravel";
import search from "public/images/search.svg"

interface EditorModalProps {
    setIsModal: any,
    type: string,
    onImageUpload: (images: File[]) => void,
    onFileUpload: (files: File[]) => void,
    onPlaceUpload: () => void,
    checkedItems?: Array<number>;
    setCheckedItems?: (items: Array<number>) => void;
    uploadedFiles?: Array<File>;
    setUploadedFiles?: (files: Array<File>) => void;
    selectedCities?: Array<number>;
    setSelectedCities?: (items: Array<number>) => void;
}

const EditorModal = ({ 
    setIsModal, 
    type, 
    onImageUpload, 
    onFileUpload, 
    onPlaceUpload, 
    checkedItems, 
    setCheckedItems,
    selectedCities,
    setSelectedCities,
}: EditorModalProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [selectedCity, setSelectedCity] = useState([]);

    /** 이미지를 selectedImages 배열(모달창 내)에 저장 */
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setSelectedImages([...selectedImages, ...Array.from(e.target.files)]);
        }
    };

    const handleRemoveImage = (index: number) => {
        setSelectedImages(selectedImages.filter((_, i) => i !== index));
    };

    /** 파일을 uploadedFiles 배열(모달창 내)에 저장 */
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)]);
        }
    };

    const handleRemoveUploadedFile = (index: number) => {
        setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
    };

    function handleSearch() {

    }

    const renderContent = () => {
        switch (type) {
            case "사진":
                return (
                    <div className="flex-col">
                        <div className="flex">
                            <Image src={alertCircle} alt="경고" />
                            <span className="pl-2.5">업로드 된 사진은 트리피 내 커뮤니티 피드에 노출 될 수 있습니다.</span>
                        </div>
                        <div className="h-[150px] my-3 flex justify-center items-center border border-lightgrey rounded-lg">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                ref={inputRef}
                                onChange={handleImageChange}
                            />
                            <label 
                                htmlFor="fileInput" 
                                className="flex flex-col items-center cursor-pointer" 
                                onClick={() => inputRef.current && inputRef.current.click()}
                            >
                                <Image src={upload} alt="업로드" />
                                <span className="text-grey mt-1">사진파일을 업로드해주세요.</span>
                                <span className="text-grey mt-1">PNG, JPG, GIF</span>
                            </label>
                        </div>
                        <span className="font-bold pt-2">파일</span>
                        <div className="h-[150px] my-4 px-4 py-3 flex flex-col border border-lightgrey rounded-lg overflow-y-auto">
                            {/** 이미지 미리보기 */}
                            {selectedImages.map((image, index) => (
                                <div key={index} className="flex justify-between items-center mx-1 my-1">
                                    <div className="flex items-center max-w-[80%]">
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="thumbnail"
                                            className="w-[40px] h-[40px]"
                                        />
                                        <span className="ml-5 truncate">{image.name}</span>
                                    </div>
                                    <button onClick={() => handleRemoveImage(index)}>
                                        <BiX size={24}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end">
                            <ConfirmBtn label="취소하기" color="bg-lightgrey" onClick={() => setIsModal(false)}/>
                            <ConfirmBtn label="업로드" color="bg-primary" onClick={() => {onImageUpload(selectedImages), setIsModal(false)}}/>
                        </div>
                    </div>
                );
            case "파일":
                return (
                    <div className="flex-col">
                        <div className="h-[150px] my-3 flex justify-center items-center border border-lightgrey rounded-lg">
                            <input
                                type="file"
                                accept="file/*"
                                className="hidden"
                                ref={inputRef}
                                onChange={handleFileChange}
                            />
                            <label 
                                htmlFor="fileInput" 
                                className="flex flex-col items-center cursor-pointer" 
                                onClick={() => inputRef.current && inputRef.current.click()}
                            >
                                <Image src={upload} alt="업로드" />
                                <span className="text-grey mt-1">파일을 업로드해주세요.</span>
                                <span className="text-grey mt-1">PDF, HWP, XLSX, ZIP</span>
                            </label>
                        </div>
                        <span className="font-bold pt-2">파일</span>
                        <div className="h-[150px] my-4 px-4 py-3 flex flex-col border border-lightgrey rounded-lg overflow-y-auto">
                            {/** 업로드된 파일 */}
                            {uploadedFiles.map((file, index) => (
                                <div key={index} className="flex justify-between items-center mx-1 my-1">
                                    <div className="flex items-center max-w-[80%]">
                                        <Image src={folder} alt="파일 아이콘"/>
                                        <span className="ml-5 truncate">{file.name}</span>
                                    </div>
                                    <button onClick={() => handleRemoveUploadedFile(index)}>
                                        <BiX size={24}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end">
                            <ConfirmBtn label="취소하기" color="bg-lightgrey" onClick={() => setIsModal(false)}/>
                            <ConfirmBtn 
                                label="업로드" 
                                color="bg-primary" 
                                onClick={() => {
                                    onFileUpload(uploadedFiles), 
                                    setIsModal(false)
                                }}
                                />
                        </div>
                    </div>
                );        
            case "일정":
                return (
                    <div className="flex-col">
                        <MyTravel 
                            status="modal" 
                            checkedItems={checkedItems} 
                            setCheckedItems={setCheckedItems}
                         />
                        <div className="flex justify-end">
                            <ConfirmBtn label="취소하기" color="bg-lightgrey" onClick={() => setIsModal(false)}/>
                            <ConfirmBtn 
                                label="공유하기" 
                                color="bg-primary" 
                                onClick={() => {setIsModal(false), onPlaceUpload()}}
                            />
                        </div>
                    </div>
                );
            case "장소":
                return (
                    <div className="flex-col">
                        <div className="h-12 flex items-center px-2 mb-3 border border-lightgrey bg-white rounded-lg">
                            <button className="px-3">
                                <Image src={search} alt="검색" width={24}/>
                            </button>
                            <input 
                                type="text" 
                                placeholder="원하는 장소를 검색해보세요."
                                className="w-full outline-none"
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="h-80 flex border border-lightgrey rounded-xl">
                            <div className="flex flex-col flex-grow">
                                <div className="h-full p-5">
                                    
                                </div>
                            </div>
                            <div className="w-3/5 border border-black rounded-r-lg">

                            </div>
                        </div>
                        <div className="flex justify-end mt-2">
                            <ConfirmBtn label="취소하기" color="bg-lightgrey" onClick={() => setIsModal(false)}/>
                            <ConfirmBtn label="저장하기" color="bg-primary" onClick={() => {setIsModal(false)}}/>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Modal
            modalMode={0}
            title={`${type} 추가`}
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='p-5'>
                {renderContent()}
            </div>
        </Modal>
    )
}

export default EditorModal;