import React from 'react';
import Modal from './Modal';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const ScheduleAddModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={1}
            title='일정 등록'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText='저장'
        >
            <div className='flex flex-col h-full p-4'>
                <div className='flex basis-[10%] justify-between items-center'>
                    <div className='w-[15%] flex justify-between items-center'>
                        <div className='w-8 h-8 rounded-lg bg-[#57CDFF]'></div>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                    <input
                        className='w-[80%] h-8 justify-center items-center rounded-xl overflow-hidden border pl-2 align-middle'
                        placeholder='일정을 등록하세요'
                    ></input>
                </div>
                <div className='flex basis-[10%] items-center'>
                    <div>요일</div>
                    <div>시작시간</div>
                    <div>~</div>
                    <div>끝나는시간</div>
                </div>
                <div className='basis-[10%] items-center'>
                    장소를 추가해보세요
                </div>
                <div className='basis-[10%] items-center'>
                    예산을 추가해보세요
                </div>
                <div className='basis-[50%]'>
                    <div className='flex items-center'>
                        <div>메모</div>
                        <div>사진</div>
                        <div>링크</div>
                        <div>저장</div>
                    </div>
                    <div className='h-full'>
                        <textarea
                            className='h-full w-full'
                            placeholder='메모를 입력하세요'
                        ></textarea>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ScheduleAddModal;
