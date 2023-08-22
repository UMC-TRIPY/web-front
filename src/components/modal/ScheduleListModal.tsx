import { getCreatedScheduleList } from '@/apis/user/friend';
import { ISchedule } from '@/types/user';
import { formatYYMMDD } from '@/utils/dateUtil';
import React, { useEffect } from 'react';
import Modal from './Modal';

interface IScheduleListModalProps {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    scheduleList: ISchedule[];
}
const ScheduleListModal = ({
    setIsModal,
    scheduleList
}: IScheduleListModalProps) => {
    return (
        <Modal
            modalMode={0}
            title='일정 목록'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='flex flex-col-reverse'>
                <div className='absolute w-full h-1/5 bg-gradient-to-t from-blur to-blur-end to-100%'></div>

                <div className='h-96 overflow-scroll overflow-x-hidden'>
                    {scheduleList.map((schedule, idx) => (
                        <div
                            key={idx}
                            className='border-2 p-4 px-8 hover:bg-main-color cursor-pointer'
                        >
                            <div className='text-xl'>
                                {schedule.city_name
                                    ? schedule.city_name
                                    : '미정'}
                            </div>
                            <div className='flex gap-2 text-grey'>
                                <div>
                                    {`${formatYYMMDD(schedule.departureDate)} ~ 
                                    ${formatYYMMDD(schedule.arrivalDate)}`}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default ScheduleListModal;
