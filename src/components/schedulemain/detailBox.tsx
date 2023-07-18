import React, { useState, useEffect } from "react";
import { AiOutlineCalendar } from 'react-icons/ai';
import format from "date-fns/format";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

interface RoundBoxProps {
    placeholder: string;
}

function RoundBox (props: RoundBoxProps) {
    return (
        <input 
            className={`border border-lightgrey w-[368px] rounded-md p-5 mx-1.5 my-4`}
            placeholder={props.placeholder}
        />
    )
}

interface RoundBtnProps {
    label: string;
    color: string;
}

function RoundBtn (props: RoundBtnProps) {
    return (
        <button
            className={`bg-${props.color} rounded-md w-[140px] py-4 mx-1.5 my-4`}
        >
        {props.label}
        </button>
    )
}

function DetailBox () {
    const [menus, setMenus] = useState<[string, boolean][]>([
        ["해외", true],
        ["국내", false]
    ]);

    const Menu = ({ menu, select, index, onClick }: MenuProps) => {
        const handleMenuClick = () => {
            onClick(index);
        };

        return (
            <div className='relative flex flex-col items-center'>
                {select && (
                    <img
                        className='absolute top-0 transform -translate-y-full'
                        src='/images/selected.png'
                        alt='none'
                    />
                )}
                <span
                    className={
                        select
                            ? 'text-primary mx-4 font-bold hover:cursor-pointer'
                            : 'text-infomenu mx-4 font-bold hover:cursor-pointer'
                    }
                    onClick={handleMenuClick}
                >
                    {menu}
                </span>
            </div>
        );
    };

    const menuClick = (selectedIndex: number) => {
        const updatedMenus: [string, boolean][] = menus.map((menu, index) => [
            menu[0],
            index === selectedIndex
        ]);
        setMenus(updatedMenus);
    };

    const [cities, setCities] = useState([
        "런던",
        "제주도",
        "대만",
        "도쿄",
        "하와이",
    ])

    // 날짜 선택 부분
    const [startDate, setStartDate] = useState<null | Date>(null);
    const [endDate, setEndDate] = useState<null | Date>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const activeColor = () => {
        let outsideMonth: any = document.getElementsByClassName(
            'react-datepicker__day--outside-month'
        );
        Object.values(outsideMonth).map((day: any) => {
            day.style.color = '#A3A3A3';
        });
    };
    const SelectDates = ({
        title,
        value
    }: {
        title: null | string;
        value: null | Date;
    }) => {
        return (
            <div
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
                className='flex items-center justify-between w-[558px] text-grey border border-lightgrey rounded-md p-5 mx-1.5 my-4 hover:cursor-pointer'
            >
                {value === null ? title : format(value, 'yyyy-MM-dd')}
                <AiOutlineCalendar size={24} />
            </div>
        );
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
    const date = new Date();

    return (
        <div className="mt-12">
            {/* 해외, 국내 탭바 */}
            <div className='flex items-end'>
                {menus.map((menu, index) => (
                    <Menu
                        key={`menu${index}`}
                        menu={menu[0]}
                        select={menu[1]}
                        index={index}
                        onClick={menuClick}
                    />
                ))}
            </div>
            {/* 세부 검색창 */}
            <div className="flex flex-row justify-between mx-2.5">
                    <RoundBox placeholder="대륙" />
                    <RoundBox placeholder="국가" />
                    <RoundBox placeholder="도시" />
                    <RoundBtn color="lightgrey" label="검색" />
            </div>
            {/* 인기 검색어 */}
            <div className="flex flex-col bg-brightgrey rounded-md px-[33px] py-2.5 mx-4">
                <div className="py-2.5">
                    인기 검색어
                </div>
                <div className="flex flex-col">
                    {cities.map((city, index) => (
                        <div key={index} className="flex items-start py-2.5">
                            <span className="text-grey mr-4">{index + 1}</span>
                            <button>{city}</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* 날짜 선택창 */}
            <div className="flex flex-row justify-between mx-2.5">
                    <SelectDates title='출발일' value={startDate} />
                    <SelectDates title='도착일' value={endDate} />
                    <RoundBtn color="primary" label="등록" />
            </div>
            <div
                    className={
                        isOpen
                            ? 'block absolute mt-[522px] ml-[80px] z-10'
                            : 'hidden'
                    }
                >
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
                        renderCustomHeader={({
                            date,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled
                        }: any) => (
                            <div className='flex justify-between px-5 py-3 text-base'>
                                <div className='font-bold'>
                                    {date.getFullYear()}년 {date.getMonth() + 1}
                                    월
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
        </div>
    )
}

export default DetailBox;