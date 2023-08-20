import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import {
    AiOutlinePicture,
    AiOutlineLink,
    AiOutlineFolderAdd
} from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes, addDays } from 'date-fns';
import ScheduleAddModal from './ScheduleAddModal';
import ko from 'date-fns/locale/ko';

const ScheduleAddInnerModal = ({
    setIsModal,
    departureDate,
    difference
}: any) => {
    const [openList, setOpenList] = useState<boolean>(false);
    const [startHour, setStartHour] = useState<any>(
        new Date(setHours(setMinutes(new Date(), 0), 6))
    );
    const [endHour, setEndHour] = useState<any>(
        new Date(setHours(setMinutes(new Date(), 0), 6))
    );
    const [depart, setDepart] = useState<any>(departureDate);
    const [color, setColor] = useState<string>('#FFE457');
    const [title, setTitle] = useState<string>('');
    const [place, setPlace] = useState<string>('');
    const [budget, setBudget] = useState<string>('');
    const [memo, setMemo] = useState<string>('');

    return (
        <ScheduleAddModal
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
        >
            <div className='flex flex-col gap-2 h-full p-4 bg-white'>
                <div className='flex basis-[10%] justify-between items-center'>
                    <div className='flex items-center'>
                        <div
                            className='w-8 h-8 cursor-pointer rounded-lg mr-2'
                            style={{ backgroundColor: color }}
                            onClick={() => setOpenList(true)}
                        />
                        <MdOutlineKeyboardArrowDown />
                        {openList && (
                            <div className='absolute flex flex-col mt-[88px]'>
                                <div
                                    className='w-8 h-8 cursor-pointer rounded-lg mb-2 bg-[#FFE457] z-10'
                                    onClick={() => {
                                        setOpenList(false);
                                        setColor('#FFE457');
                                    }}
                                />
                                <div
                                    className='w-8 h-8 cursor-pointer rounded-lg mb-2 bg-[#57CDFF] z-10'
                                    onClick={() => {
                                        setOpenList(false);
                                        setColor('#57CDFF');
                                    }}
                                />
                                <div
                                    className='w-8 h-8 cursor-pointer rounded-lg mb-2 bg-[#FF7F57] z-10'
                                    onClick={() => {
                                        setOpenList(false);
                                        setColor('#FF7F57');
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <input
                        key={`scheduleinputelement`}
                        className='w-[80%] h-8 justify-center items-center rounded-xl border pl-2 align-middle'
                        placeholder='일정을 등록하세요'
                        type='text'
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className='flex gap-2 basis-[10%] items-center'>
                    <div className='flex justify-center items-center pl-2 w-[40%] h-10 bg-brightgrey rounded-lg'>
                        <DatePicker
                            className='cursor-pointer'
                            dateFormatCalendar='yyyy년 MM월'
                            dateFormat='MM월 dd일'
                            selected={depart}
                            minDate={departureDate}
                            maxDate={addDays(departureDate, difference)}
                            onChange={(date) => {
                                setDepart(date);
                            }}
                            locale={ko}
                        />
                    </div>
                    <div className='flex justify-center items-center pl-2 w-[25%] h-10 bg-brightgrey rounded-lg'>
                        <DatePicker
                            className='cursor-pointer'
                            selected={startHour}
                            onChange={(date: any) => {
                                if (date.getHours() > endHour.getHours()) {
                                    setEndHour(date);
                                } else if (
                                    date.getHours() === endHour.getHours()
                                ) {
                                    if (
                                        date.getMinutes() > endHour.getMinutes()
                                    )
                                        setEndHour(date);
                                }
                                setStartHour(date);
                            }}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            dateFormat='h:mm aa'
                            minTime={setHours(setMinutes(new Date(), 0), 6)}
                            maxTime={setHours(setMinutes(new Date(), 0), 23)}
                        />
                    </div>
                    <div className='flex justify-center items-center w-[5%] h-10'>
                        ~
                    </div>
                    <div className='flex justify-center items-center pl-2 w-[25%] h-10 bg-brightgrey rounded-lg'>
                        <DatePicker
                            className='cursor-pointer'
                            selected={endHour}
                            onChange={(date) => setEndHour(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            dateFormat='h:mm aa'
                            minTime={setHours(
                                setMinutes(new Date(), startHour.getMinutes()),
                                startHour.getHours()
                            )}
                            maxTime={setHours(setMinutes(new Date(), 0), 23)}
                        />
                    </div>
                </div>
                <div className='flex basis-[15%] items-center border rounded-lg overflow-hidden'>
                    <div className='flex justify-center items-center w-[10%] h-full bg-white border-r'>
                        <FiMapPin />
                    </div>
                    <input
                        className='w-[80%] h-8 justify-center items-center pl-2 align-middle'
                        placeholder='장소를 추가해보세요'
                        value={place}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPlace(e.target.value)
                        }
                    />
                </div>
                <div className='flex basis-[15%] items-center border rounded-lg overflow-hidden'>
                    <div className='flex justify-center items-center w-[10%] h-full bg-white border-r'>
                        ₩
                    </div>
                    <input
                        className='w-[80%] h-8 justify-center items-center pl-2 align-middle'
                        placeholder='예산을 추가해보세요'
                        value={budget}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setBudget(e.target.value)
                        }
                    />
                </div>
                <div className='basis-[50%]'>
                    <div className='flex items-center gap-2 p-2 bg-brightgrey'>
                        <div>메모</div>
                        <AiOutlineLink />
                        <AiOutlinePicture />
                        <AiOutlineFolderAdd />
                    </div>
                    <div>
                        <textarea
                            className='h-24 w-full bg-brightgrey pl-2'
                            placeholder='메모를 입력하세요'
                            value={memo}
                            onChange={(e) => setMemo(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </ScheduleAddModal>
    );
};

export default ScheduleAddInnerModal;
