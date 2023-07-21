import React from 'react';
import Modal from './Modal';

const ScheduleAddModal = ({ setIsModal }: any) => {
    return (
        <Modal
            modalMode={1}
            title='일정 편집'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText='저장'
        >
            <div className='flex flex-col h-full p-4'>
                <div className='flex justify-between basis-[10%] items-center'>
                    <div>색버튼</div>
                    <div className='w-[70%]'>
                        <input
                            className='w-full'
                            placeholder='일정을 등록하세요'
                        ></input>
                    </div>
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
