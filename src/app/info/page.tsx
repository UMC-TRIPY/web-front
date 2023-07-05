'use client';

import ContentList from '@/components/community/ContentList';
import Dropdown from '@/components/community/Dropdown';
import TabList from '@/components/community/TabList';
import { useState } from 'react';

interface IContent {
    imageSrc: string;
    nickName: string;
    title: string;
    like: number;
    view: number;
}

interface ITab {
    id: number;
    name: string;
    clicked: boolean;
}

const sampleContents: IContent[] = [
    {
        imageSrc: '/images/user.svg',
        nickName: '규규규규규규규규규규',
        title: '내용을 몰라용',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '루카',
        title: '내용을 몰라용',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '시미',
        title: '내용을 몰라용',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '레니',
        title: '내용을 몰라용',
        like: 9999,
        view: 9999
    }
];

const info = () => {
    const [contents, setContents] = useState(sampleContents);
    const [tabs, setTabs] = useState([
        {
            id: 0,
            name: '여행자 보험',
            clicked: true
        },
        {
            id: 1,
            name: '관광지',
            clicked: false
        },
        {
            id: 2,
            name: '물가',
            clicked: false
        },
        {
            id: 3,
            name: '맛집',
            clicked: false
        },
        {
            id: 4,
            name: '음식',
            clicked: false
        },
        {
            id: 5,
            name: '환전',
            clicked: false
        },
        {
            id: 6,
            name: '현금',
            clicked: false
        },
        {
            id: 7,
            name: '카드',
            clicked: false
        },
        {
            id: 8,
            name: '쇼핑',
            clicked: false
        },
        {
            id: 9,
            name: '날씨',
            clicked: false
        }
    ]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [category, setCategory] = useState('전체');

    const handleClickTab = (id: number) => {
        setTabs(
            tabs.map((tab: ITab) =>
                tab.id === id
                    ? { ...tab, clicked: true }
                    : { ...tab, clicked: false }
            )
        );
    };
    return (
        <div className='w-3/5 m-auto mt-4'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>도쿄 커뮤니티</div>
                <div className='flex basis-1/2 justify-around item-center'>
                    <div
                        className='relative'
                        data-te-dropdown-ref
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <Dropdown
                            category={category}
                            isDropdownOpen={isDropdownOpen}
                        />
                    </div>

                    <div className='flex items-center w-4/5'>
                        <label
                            htmlFor='small-input'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        ></label>
                        <input
                            type='text'
                            id='small-input'
                            placeholder='검색어를 입력하세요'
                            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        ></input>
                    </div>
                </div>
            </div>
            <TabList tabs={tabs} handleClickTab={handleClickTab} />
            <ContentList contents={contents} />
            <div className='flex justify-center'>
                <div className='flex justify-between mt-4 w-1/12 text-[#A3A3A3]'>
                    <div>{'<'}</div>
                    <div>1</div>
                    <div>{'>'}</div>
                </div>
            </div>
        </div>
    );
};

export default info;
