import React from "react";
import Modal from "./Modal";

interface EditorModalProps {
    setIsModal: any,
    type: string,
}

const EditorModal = ({ setIsModal, type }: EditorModalProps) => {
    const renderContent = () => {
        switch (type) {
            case "사진":
                return <div>사진 추가 컴포넌트 또는 내용</div>;
            case "파일":
                return <div>파일 추가 컴포넌트 또는 내용</div>;
            case "일정":
                return <div>일정 추가 컴포넌트 또는 내용</div>;
            case "장소":
                return <div>장소 추가 컴포넌트 또는 내용</div>;
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