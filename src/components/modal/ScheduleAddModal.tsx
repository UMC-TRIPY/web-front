import React from 'react';
import Modal from './Modal';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import {
    AiOutlinePicture,
    AiOutlineLink,
    AiOutlineFolderAdd
} from 'react-icons/ai';

const ScheduleAddModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={1}
            title='일정 등록'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText='저장'
        >
            <div className='flex flex-col gap-2 h-full p-4'>
                <div className='flex basis-[10%] justify-between items-center'>
                    <div className='w-[15%] flex justify-between items-center'>
                        <div className='w-8 h-8 rounded-lg bg-[#57CDFF]'></div>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                    <input
                        className='w-[80%] h-8 justify-center items-center rounded-xl border pl-2 align-middle'
                        placeholder='일정을 등록하세요'
                    ></input>
                </div>
                <div className='flex gap-2 basis-[10%] items-center'>
                    <div className='flex items-center pl-2 w-[40%] h-10 bg-lightgrey rounded-lg'>
                        6월 30일 (금요일)
                    </div>
                    <div className='flex items-center pl-2 w-[25%] h-10 bg-lightgrey rounded-lg'>
                        8:00 AM
                    </div>
                    <div className='flex justify-center items-center w-[5%] h-10'>
                        ~
                    </div>
                    <div className='flex items-center pl-2 w-[25%] h-10 bg-lightgrey rounded-lg'>
                        9:00 AM
                    </div>
                </div>
                <div className='flex basis-[15%] items-center border rounded-lg overflow-hidden'>
                    <div className='flex justify-center items-center w-[10%] h-full bg-white border-r'>
                        <FiMapPin />
                    </div>
                    <input
                        className='w-[80%] h-8 justify-center items-center pl-2 align-middle'
                        placeholder='장소를 추가해보세요'
                    ></input>
                </div>
                <div className='flex basis-[15%] items-center border rounded-lg overflow-hidden'>
                    <div className='flex justify-center items-center w-[10%] h-full bg-white border-r'>
                        ₩
                    </div>
                    <input
                        className='w-[80%] h-8 justify-center items-center pl-2 align-middle'
                        placeholder='예산을 추가해보세요'
                    ></input>
                </div>
                <div className='basis-[50%]'>
                    <div className='flex items-center gap-2 p-2 bg-lightgrey'>
                        <div>메모</div>
                        <AiOutlineLink />
                        <AiOutlinePicture />
                        <AiOutlineFolderAdd />
                    </div>
                    <div>
                        <textarea
                            className='h-24 w-full bg-lightgrey pl-2'
                            placeholder='메모를 입력하세요'
                        ></textarea>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ScheduleAddModal;
