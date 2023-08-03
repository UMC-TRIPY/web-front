import React from 'react';
import Modal from './Modal';
import DetailBag from '../mybag/DetailBag';

const MyBagModal = ({ setIsModal, selectedPlace }: any) => {
    return (
        <Modal
            modalMode={0}
            title={`${selectedPlace} 준비물 상세보기`}
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='flex flex-col-reverse'>
                <div className='absolute w-full h-1/5 bg-gradient-to-t from-blur to-blur-end to-100%'></div>
                <div className='h-96 overflow-scroll pl-8 pr-8 mb-12 overflow-x-hidden'>
                    <DetailBag />
                </div>
            </div>
        </Modal>
    );
};

export default MyBagModal;
