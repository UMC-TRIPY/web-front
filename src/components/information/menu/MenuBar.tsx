import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import FixedSearchCityModal from '../../modal/FixedSearchCityModal';
import OutlineSearchInput from '../../common/OutlineSearchInput';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

export default function MenuBar({ travels }: { travels: [string, string][] }) {
    const router = useRouter();
    const para = useParams();
    const currentLocation = para.city_name;
    const [place, setPlace] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
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
            menus.map((menu) => [
                menu[0],
                scrollY >= menu[2].min && scrollY < menu[2].max,
                menu[2]
            ]);
        setMenus(updatedMenus);
    });

    const results = travels
        .filter((t) => t[0][0].includes(place[0]))
        .filter((t) => t[0].includes(place.replace(/ /g, '')));

    useEffect(() => {}, []);

    return (
        <div
            className={`flex justify-between py-6 sticky top-0 bg-white ${
                menus[0][1] ? 'z-0' : 'z-10'
            }`}
        >
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
            <div className='w-1/3 flex flex-row-reverse items-end'>
                <div className='flex flex-col justify-center w-full'>
                    <OutlineSearchInput
                        place={place}
                        setPlace={setPlace}
                        setModalOpen={setModalOpen}
                    />
                    <Link
                        onClick={() => {
                            if (place === '') {
                                alert('1글자 이상 입력해주세요.');
                            }

                            if (results.length !== 1) {
                                alert('해당 여행지가 없습니다.');
                            }
                        }}
                        href={`/info/${results.map((result) => result[1])}`}
                        className='absolute self-end mr-5 hover:cursor-pointer'
                    >
                        <BiSearch size='24' />
                    </Link>
                </div>
                {modalOpen && (
                    <FixedSearchCityModal
                        setModalOpen={setModalOpen}
                        results={results}
                    />
                )}
            </div>
        </div>
    );
}
