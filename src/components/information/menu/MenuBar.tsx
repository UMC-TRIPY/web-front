import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import FixedSearchCityModal from '../../modal/FixedSearchCityModal';
import OutlineSearchInput from '../../common/OutlineSearchInput';
import interSectionObserver from '@/hooks/intersectionsObserver';
import { MenuProps } from '@/types/menu';
import MenuList from './MenuList';

export default function MenuBar({ travels }: { travels: [string, string][] }) {
    const [place, setPlace] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [menus, setMenus] = useState<MenuProps[]>([
        { id: 'main', name: '메인', offsetTop: 0, isIntersected: true },
        { id: 'hot-place', name: '명소', offsetTop: 0, isIntersected: false },
        {
            id: 'materials',
            name: '준비물',
            offsetTop: 0,
            isIntersected: false
        },
        {
            id: 'community',
            name: '후기/회화',
            offsetTop: 0,
            isIntersected: false
        }
    ]);

    useEffect(() => {
        if (loading) {
            interSectionObserver({ menus, setMenus });
        }
        setLoading(false);
    }, [loading, menus]);

    const results = travels
        .filter((t) => t[0][0].includes(place[0]))
        .filter((t) => t[0].includes(place.replace(/ /g, '')));

    return (
        <div
            className='flex justify-between py-6 sticky top-0 bg-white z-10'
            id='menu'
        >
            <div className='flex items-end'>
                {menus.map((menu) => (
                    <MenuList
                        key={menu.name}
                        name={menu.name}
                        offsetTop={menu.offsetTop}
                        isIntersected={menu.isIntersected}
                        id=''
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
