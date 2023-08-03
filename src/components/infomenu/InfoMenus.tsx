import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

export default function InfoMenus() {
    const para = useParams();
    const currentLocation = para.city;
    const [place, setPlace] = useState<string>('');
    const [activeFocus, setActiveFocus] = useState<boolean>(false);
    const [menus, setMenus] = useState<
        [string, boolean, { min: number; max: number }][]
    >([
        ['메인', true, { min: 0, max: 800 }],
        ['명소', false, { min: 800, max: 2025 }],
        ['준비물', false, { min: 2025, max: 2525 }],
        ['후기/회화', false, { min: 2525, max: 5000 }]
    ]);

    const Menu = ({ menu, select, index, onClick }: MenuProps) => {
        return (
            <div className='flex flex-col items-center'>
                {select && (
                    <Image
                        src='/images/selected.png'
                        alt='none'
                        width={16}
                        height={16}
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

    const travels = [
        ['오사카', 'osaka'],
        ['오키나와', 'okinawa'],
        ['오스트리아', 'austria'],
        ['오타쿠', 'otaku'],
        ['오키키', 'okay'],
        ['유나이티드', 'united'],
        ['도쿄', 'tokyo'],
        ['다낭', 'danang'],
        ['싸이판', 'saipan'],
        ['보라카이', 'boracay'],
        ['부다페스트', 'budapest'],
        ['파리', 'paris'],
        ['나폴리', 'neapolitan'],
        ['나트랑', 'nhatrang'],
        ['뉴욕', 'newyork']
    ];
    const results = travels
        .filter((t) => t[0][0].includes(place[0]))
        .filter((t) => t[0].includes(place.replace(/ /g, '')));

    const length = results.length === 0 ? true : false;

    useEffect(() => {}, []);

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
                    className='border border-grey w-96 h-14 rounded-lg py-3.5 pl-6 searchPlace'
                    type='text'
                    placeholder='보고 싶은 여행지를 입력하세요'
                    value={place}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlace(e.target.value)
                    }
                    onFocus={() => setActiveFocus(true)}
                    onBlur={() => setTimeout(() => setActiveFocus(false), 250)}
                />
                <div
                    className={
                        length || !activeFocus
                            ? 'hidden'
                            : `w-96 max-h-56 absolute top-[104px] bg-white rounded-lg border  ${
                                  results.length > 4
                                      ? 'overflow-y-scroll'
                                      : 'overflow-y-hidden'
                              }`
                    }
                >
                    {results.map((result, idx) => (
                        <Link
                            key={`resultlink${idx}`}
                            href={`/info/${result[1]}`}
                        >
                            <div
                                key={`result${idx}`}
                                className='py-4 pl-8 border-y border-morelightgrey cursor-pointer'
                                onClick={() => {}}
                            >
                                {result[0]}
                            </div>
                        </Link>
                    ))}
                </div>
                <Link
                    href={
                        place === ''
                            ? `/info/${currentLocation}`
                            : `/info/${results.map((result) => result[1])}`
                    }
                    className='absolute self-end mr-5 hover:cursor-pointer'
                >
                    <BiSearch
                        onClick={() => {
                            if (place === '') {
                                alert('1글자 이상 입력해주세요.');
                            }
                        }}
                        size='24'
                    />
                </Link>
            </div>
        </div>
    );
}
