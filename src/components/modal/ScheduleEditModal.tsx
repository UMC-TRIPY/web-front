import React from 'react';
import Modal from './Modal';

const ScheduleEditModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={1}
            title='일정 편집'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText='저장'
        >
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4 justify-center h-4/5 p-5'></div>
                <div className='text-xs text-center text-grey mt-4 p-5'></div>
            </div>
        </Modal>
    );
};

export default ScheduleEditModal;
