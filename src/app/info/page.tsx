'use client';

import ContentList from '@/components/community/ContentList';
import TabList from '@/components/community/TabList';
import { useState } from 'react';

const tabs = [
    '여행자 보험',
    '관광지',
    '물가',
    '맛집',
    '음식',
    '환전',
    '현금',
    '카드',
    '쇼핑',
    '날씨'
];

interface Content {
    imageSrc: string;
    nickName: string;
    title: string;
    like: number;
    view: number;
}

const sampleContents: Content[] = [
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
                        flexBasis: '30%',
                        justifyContent: 'space-around'
                    }}
                >
                    <div>검색구분</div>
                    <div>드랍다운</div>
                    <div>검색어를 입력하세요</div>
                </div>
            </div>
            <TabList tabs={tabs} />
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
