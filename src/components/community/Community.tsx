import { useState } from 'react';
import ContentList from './ContentList';
import Dropdown from './Dropdown';
import InputBox from './InputBox';
import Pagination from './Pagination';
import TabList from './TabList';

interface ITab {
    id: number;
    name: string;
    clicked: boolean;
}

interface IContent {
    imageSrc: string;
    nickName: string;
    title: string;
    like: number;
    view: number;
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

const Community = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [category, setCategory] = useState('전체');
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
        <div>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>도쿄 커뮤니티</div>
                <div className='flex basis-1/2 justify-around item-center'>
                    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <Dropdown
                            category={category}
                            isDropdownOpen={isDropdownOpen}
                        />
                    </div>
                    <InputBox />
                </div>
            </div>
            <TabList tabs={tabs} handleClickTab={handleClickTab} />
            <ContentList contents={contents} />
            <Pagination />
        </div>
    );
};

export default Community;
