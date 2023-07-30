import React from 'react';
import Modal from './Modal';

const SearchboxModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={0}
            title='일정 상세보기'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='flex flex-col-reverse'>
                <div className='absolute w-full h-1/5 bg-gradient-to-t from-blur to-blur-end to-100%'></div>
                <div className='h-96 overflow-scroll pl-8 pr-8 overflow-x-hidden'>
                </div>
            </div>
        </Modal>
    );
};

export default SearchboxModal;