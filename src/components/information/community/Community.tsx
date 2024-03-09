import { useState, useEffect } from 'react';
import ContentList from './ContentList';
import Dropdown from './Dropdown';
import InputBox from './InputBox';
import TabList from './TabList';
import Pagination from '../../maincommunity/Pagination';
import Conversation from '../conversation/Conversation';

interface ITab {
    id: number;
    name: string;
    clicked: boolean;
}

export interface IContent {
    imageSrc: string;
    nickName: string;
    title: string;
    like: number;
    view: number;
}

const contents: IContent[] = [
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
    },
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
    },
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

const Community = ({ cityName }: { cityName: string }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [category, setCategory] = useState('전체');
    const totalPages = Math.ceil(contents.length / 10);
    const [current, setCurrent] = useState<number>(1);
    const [currentTab, setCurrentTab] = useState(1);
    const [datas, setDatas] = useState<IContent[]>(contents.slice(0, 10));
    useEffect(() => {
        setDatas(contents.slice((current - 1) * 10, current * 10));
    }, [current]);
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

    const handleClickTab = (id: number) => setCurrentTab(id);

    return (
        <div id='community' className='pb-16'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>{cityName} 커뮤니티</div>
                <div className='flex gap-2 basis-1/2 justify-around item-center bg-white'>
                    <Dropdown
                        setCategory={setCategory}
                        setIsDropdownOpen={setIsDropdownOpen}
                        category={category}
                        isDropdownOpen={isDropdownOpen}
                    />
                    <InputBox />
                </div>
            </div>
            <div className='flex'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleClickTab(tab.id)}
                        className={`py-4 border-b w-full text-center text-xl border-b-lightgrey text-grey ${
                            currentTab === tab.id &&
                            'font-bold border-b-primary text-primary'
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <ContentList contents={datas} />
            <Pagination
                totalPages={totalPages}
                current={current}
                setCurrent={setCurrent}
            />
            {/* 회화 페이지 */}
            <Conversation />
        </div>
    );
};

export default Community;
