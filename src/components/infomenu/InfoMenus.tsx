import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

export default function InfoMenus() {
    const [menus, setMenus] = useState<[string, boolean][]>([
        ['메인', true],
        ['명소', false],
        ['준비물', false],
        ['후기', false],
        ['회화', false]
    ]);

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
        const updatedMenus: [string, boolean][] = menus.map((menu, index) => [
            menu[0],
            index === selectedIndex
        ]);
        setMenus(updatedMenus);
    };

    return (
        <div className='flex justify-between'>
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
                />
                <BiSearch size='24' className='absolute self-end mr-5' />
            </div>
        </div>
    );
}
