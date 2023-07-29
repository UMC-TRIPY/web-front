import Image from 'next/image';
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
            completeText='추가하기'
        >
            <div className='flex flex-col'>
                <div className='flex justify-center items-center h-2/5 p-5'>
                    <Image
                        src='/images/selectedBag.svg'
                        alt='my-bag'
                        width={100}
                        height={100}
                    />
                </div>
                <div className='flex justify-center mb-8'>
                    <input
                        className='w-4/5 h-12 text-xs text-center placeholder:text-[#C1C1C1] rounded-xl border pl-2 align-middle'
                        placeholder='가방의 이름을 입력해주세요'
                    />
                </div>
            </div>
        </Modal>
    );
};

export default NewBagModal;
