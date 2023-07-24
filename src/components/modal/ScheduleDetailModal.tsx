import React from 'react';
import LabelSchedules from '../detailschedule/LabelSchedules';
import Modal from './Modal';

const ScheduleDetailModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={0}
            title='일정 상세보기'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='h-96 overflow-scroll pl-8 pr-8'>
                <LabelSchedules status='modal' />
            </div>
        </Modal>
    );
};

export default ScheduleDetailModal;
