import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import format from 'date-fns/format';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../infocity/Calendar';
import HotSearch from './hotSearch';

import { useRouter } from 'next/navigation';
import SelectedPlaces from './SelectedPlaces';
import { differenceInDays } from 'date-fns';
import { updateLists } from '@/apis/travellists/update';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

interface RoundBoxProps {
    placeholder: string;
}

function RoundBox(props: RoundBoxProps) {
    return (
        <input
            className={`border border-lightgrey w-[368px] rounded-md p-5 mx-1.5 my-4`}
            placeholder={props.placeholder}
        />
    );
}

interface RoundBtnProps {
    label: string;
    color: string;
    onClick?: () => void;
}

function RoundBtn(props: RoundBtnProps) {
    return (
        <button
            className={`bg-${props.color} rounded-md w-[140px] py-4 mx-1.5 my-4`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

interface DetailBoxProps {
    selectedCities: string;
    setSelectedCities: React.Dispatch<React.SetStateAction<string>>;
}

function DetailBox({ selectedCities, setSelectedCities }: DetailBoxProps) {
    const [menus, setMenus] = useState<[string, boolean][]>([
        ['해외', true],
        ['국내', false]
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

    // 날짜 선택 부분
    const [startDate, setStartDate] = useState<null | Date>(null);
    const [endDate, setEndDate] = useState<null | Date>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

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
                {value === null ? title : format(value, 'yyyy.MM.dd')}
                <AiOutlineCalendar size={24} />
            </div>
        );
    };

    const register = () => {
        if (startDate === null || endDate === null) return;
        const start: string = format(startDate, 'yyyy.MM.dd');
        const end: string = format(endDate, 'yyyy.MM.dd');
        const difference: number = differenceInDays(endDate, startDate) + 1;
        const dates: string = `${start} ~ ${end} (${
            difference - 1
        }박 ${difference}일)`;
        sessionStorage.setItem('date', dates);
        sessionStorage.setItem('place', selectedCities);
        updateLists({
            cityname: selectedCities,
            departureDate: format(startDate, 'yyyy-MM-dd'),
            arrivalDate: format(endDate, 'yyyy-MM-dd')
        });
    };
    return (
        <div className='mt-12'>
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
            <div className='flex flex-row justify-between mx-2.5'>
                <RoundBox placeholder='대륙' />
                <RoundBox placeholder='국가' />
                <RoundBox placeholder='도시' />
                <RoundBtn color='lightgrey' label='검색' />
            </div>
            {/* 인기 검색어 */}
            {!!selectedCities ? (
                <SelectedPlaces
                    selectedCities={selectedCities}
                    setSelectedCities={setSelectedCities}
                />
            ) : (
                <HotSearch />
            )}
            {/* 날짜 선택창 */}
            <div className='flex flex-row justify-between mx-2.5'>
                <SelectDates title='출발일' value={startDate} />
                <SelectDates title='도착일' value={endDate} />
                <RoundBtn
                    color='primary'
                    label='등록'
                    onClick={() => {
                        if (startDate === null || endDate === null) {
                            alert('날짜를 선택해주세요.');
                            return;
                        }
                        if (!selectedCities) {
                            alert('여행 지역을 선택해 주세요.');
                            return;
                        }
                        register();
                        router.push('/newschedule');
                    }}
                />
            </div>
            <Calendar
                startDate={startDate}
                endDate={endDate}
                isOpen={isOpen}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setIsOpen={setIsOpen}
                claName={isOpen ? 'block absolute ml-[320px] z-10' : 'hidden'}
            />
        </div>
    );
}

export default DetailBox;
