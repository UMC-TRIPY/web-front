import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import Modal from './Modal';

const NewBagModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={0}
            title=''
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText='삭제하기'
        >
            <div className='flex flex-col'>
                <div className='flex justify-center items-center h-2/5 p-5'>
                    <FiAlertTriangle className='text-[#EB5757] text-8xl' />
                </div>
                <div className='text-xl text-center text-dark-black p-5'>
                    <div>일정을 삭제하시겠습니까?</div>
                    <div> 삭제한 일정은 복구할 수 없습니다.</div>
                </div>
            </div>
        </Modal>
    );
};

export default NewBagModal;
