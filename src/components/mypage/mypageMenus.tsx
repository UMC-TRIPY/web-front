import React, { useState } from 'react';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

interface MypageMenusProps {
    activeMenu: string;
    onMenuClick: (menu: string) => void;
}

export default function MypageMenus({
    activeMenu,
    onMenuClick
}: MypageMenusProps) {
    const [menus, setMenus] = useState<[string, boolean][]>([
        ['정보', true],
        ['여행일정', false],
        ['내가방', false],
        ['친구관리', false]
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
        const selectedMenu = menus[selectedIndex][0];
        onMenuClick(selectedMenu);
    };

    return (
        <div>
            <div className='text-5xl font-bold mx-4 mt-20 mb-12'>
                마이페이지
            </div>
            <div className='flex justify-between'>
                <nav className='flex items-end'>
                    {menus.map((menu, index) => (
                        <Menu
                            key={`menu${index}`}
                            menu={menu[0]}
                            select={menu[0] === activeMenu}
                            index={index}
                            onClick={menuClick}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
}
