'use client';

import ContentList from '@/components/community/ContentList';
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
        imageSrc: 'image1',
        nickName: '규',
        title: '내용을 몰라용',
        like: 123,
        view: 123
    },
    {
        imageSrc: 'image2',
        nickName: '루카',
        title: '내용을 몰라용',
        like: 4213,
        view: 4123
    },
    {
        imageSrc: 'image3',
        nickName: '시미',
        title: '내용을 몰라용',
        like: 2313,
        view: 1213
    },
    {
        imageSrc: 'image4',
        nickName: '레니',
        title: '내용을 몰라용',
        like: 6321,
        view: 3241
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
        <div
            className='info-Container'
            style={{ width: '60vw', margin: '0 auto', marginTop: '15px' }}
        >
            <div
                className='header'
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <div className='text-3xl font-bold'>도쿄 커뮤니티</div>
                <div
                    style={{
                        display: 'flex',
                        flexBasis: '40%',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <div>검색구분</div>
                    <div>드랍다운</div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <label
                            htmlFor='small-input'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            Small input
                        </label>
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
            <div
                className='pagination'
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: ' space-between',
                        width: '5%',
                        marginTop: '15px'
                    }}
                >
                    <div>{'<'}</div>
                    <div>1</div>
                    <div>{'>'}</div>
                </div>
            </div>
        </div>
    );
};

export default info;
