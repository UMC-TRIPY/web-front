import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';
import { ko } from 'date-fns/locale';
import { ICalendarProps } from '@/types/calendar';

export default function Calendar({
    claName,
    startDate,
    endDate,
    isOpen,
    setStartDate,
    setEndDate,
    setIsOpen
}: ICalendarProps) {
    const activeColor = () => {
        let outsideMonth: any = document.getElementsByClassName(
            'react-datepicker__day--outside-month'
        );
        Object.values(outsideMonth).map((day: any) => {
            day.style.color = '#A3A3A3';
        });
    };
    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    useEffect(() => {
        endDate === null ? setIsOpen(isOpen) : setIsOpen(!isOpen);
    }, [endDate]);
    useEffect(() => {
        activeColor();
    }, []);
    return (
        <>
            <div className={claName}>
                <DatePicker
                    dateFormatCalendar='yyyy년 MM월'
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    locale={ko}
                    onMonthChange={activeColor}
                    minDate={new Date()}
                    renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }: any) => (
                        <div className='flex justify-between px-5 py-3 text-base'>
                            <div className='font-bold'>
                                {date.getFullYear()}년 {date.getMonth() + 1}월
                            </div>
                            <div>
                                <button
                                    type='button'
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                >
                                    <img
                                        className='rotate-180'
                                        src='/images/calendararrow.png'
                                    />
                                </button>
                                <button
                                    type='button'
                                    onClick={increaseMonth}
                                    className='ml-6'
                                    disabled={nextMonthButtonDisabled}
                                >
                                    <img src='/images/calendararrow.png' />
                                </button>
                            </div>
                        </div>
                    )}
                />
            </div>
        </>
    );
}
