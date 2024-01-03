import LoginModal from '@/components/modal/LoginModal';
import SelectDate from './SelectDate';
import { useState } from 'react';
import useCreateSchedule from '@/hooks/createSchedule';
import { IMakeTripDatesProps } from '@/types/schedule';

const MakeTripDates = ({
    startDate,
    endDate,
    isOpen,
    setIsOpen,
    city
}: IMakeTripDatesProps) => {
    const [modal, setModal] = useState<boolean>(false);
    const isUser = localStorage.getItem('uid') === null ? false : true;

    const { createSchedule } = useCreateSchedule();

    const loginOrCreate = () => {
        isUser
            ? createSchedule({
                  startDate,
                  endDate,
                  city
              })
            : setModal(true);
    };

    return (
        <div>
            <span className='text-2xl'>여행계획을 시작해볼까요?</span>
            <div className='flex mt-3'>
                <SelectDate
                    title='출발일'
                    value={startDate}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <SelectDate
                    title='도착일'
                    value={endDate}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <button
                    type='button'
                    onClick={loginOrCreate}
                    className={
                        isUser
                            ? 'w-2/12  bg-primary rounded-r px-4'
                            : 'w-2/12  bg-black text-white rounded-r px-4'
                    }
                >
                    {isUser ? '등록하기' : '로그인하기'}
                </button>
            </div>
            {modal && (
                <LoginModal
                    setIsModal={setModal}
                    setIsLogin={() => {}}
                    setIsSignUp={() => {}}
                    setIsLoggedIn={() => {}}
                    title={'로그인'}
                />
            )}
        </div>
    );
};

export default MakeTripDates;
