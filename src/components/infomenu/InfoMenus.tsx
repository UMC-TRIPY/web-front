import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

export default function InfoMenus() {
    const [menus, setMenus] = useState<
        [string, boolean, { min: number; max: number }][]
    >([
        ['메인', true, { min: 0, max: 800 }],
        ['명소', false, { min: 800, max: 2025 }],
        ['준비물', false, { min: 2025, max: 2525 }],
        ['후기/회화', false, { min: 2525, max: 5000 }]
    ]);
    const [place, setPlace] = useState<string>('');

    const Menu = ({ menu, select, index, onClick }: MenuProps) => {
        return (
            <div className='flex flex-col items-center'>
                {select && (
                    <img
                        className='block'
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
                    onClick={() => onClick(index)}
                >
                    {menu}
                </span>
            </div>
        );
    };

    const menuClick = (selectedIndex: number) => {
        const updatedMenus: [string, boolean, { min: number; max: number }][] =
            menus.map((menu, index) => [
                menu[0],
                index === selectedIndex,
                menu[2]
            ]);
        scrollTo({ top: menus[selectedIndex][2].min, behavior: 'smooth' });
        setMenus(updatedMenus);
    };

    window.addEventListener('scroll', () => {
        const updatedMenus: [string, boolean, { min: number; max: number }][] =
            menus.map((menu, index) => [
                menu[0],
                scrollY >= menu[2].min && scrollY < menu[2].max,
                menu[2]
            ]);
        setMenus(updatedMenus);
    });

    useEffect(() => {}, [menus]);

    return (
        <div className='flex justify-between py-6 sticky top-0 bg-white z-10'>
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
            <div className='flex flex-col justify-center'>
                <input
                    className='border border-grey w-96 h-14 rounded-lg py-3.5 pl-6'
                    type='text'
                    placeholder='보고 싶은 여행지를 입력하세요'
                    value={place}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlace(e.target.value)
                    }
                />
                <BiSearch
                    onClick={() =>
                        place === ''
                            ? alert('1글자 이상 입력해주세요.')
                            : alert(`${place} 검색 중...`)
                    }
                    size='24'
                    className='absolute self-end mr-5 hover:cursor-pointer'
                />
            </div>
        </div>
    );
}
