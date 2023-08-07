import ContentList from '../community/ContentList';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { BiSearch } from 'react-icons/bi';

interface IContent {
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
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '크크',
        title: '2번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    },
    {
        imageSrc: '/images/user.svg',
        nickName: '허거덩',
        title: '3번째 페이지요',
        like: 9999,
        view: 9999
    }
];

export default function AllPosts() {
    const totalPages = Math.ceil(contents.length / 10);
    const [current, setCurrent] = useState<number>(1);
    const [datas, setDatas] = useState<any>(contents.slice(0, 10));
    const [isRecent, setIsRecent] = useState<boolean>(true);
    const [ctg, setCtg] = useState<string>('');
    useEffect(() => {
        setDatas(contents.slice((current - 1) * 10, current * 10));
    }, [current]);

    return (
        <div className='flex flex-col mb-[88px]'>
            {/* mb-8 */}
            <span className='text-3xl font-bold'>커뮤니티 전체 글</span>
            <div className='flex flex-row-reverse items-center mb-5'>
                <button
                    className={`text-xl ${
                        !isRecent
                            ? 'font-bold text-black'
                            : 'font-normal text-grey'
                    }`}
                    onClick={() => setIsRecent(false)}
                >
                    추천 많은 순
                </button>
                <span className='mx-5'>|</span>
                <button
                    className={`text-xl ${
                        isRecent
                            ? 'font-bold text-black'
                            : 'font-normal text-grey'
                    }`}
                    onClick={() => setIsRecent(true)}
                >
                    최신순
                </button>
            </div>
            <div className='w-full border border-lightgrey rounded-xl flex items-center mb-8'>
                <input
                    className='w-full pl-14 py-3 rounded-xl'
                    placeholder='카테고리 내 해시태그를 검색해보세요.'
                    value={ctg}
                    onChange={(e) => setCtg(e.target.value)}
                />
                <BiSearch className='absolute ml-5' size={24} />
            </div>
            <ContentList contents={datas} />
            <div className='flex flex-col justify-center'>
                <Pagination
                    totalPages={totalPages}
                    current={current}
                    setCurrent={setCurrent}
                />
                <button className='absolute self-end bg-lightgrey py-3 px-11 mt-10'>
                    글쓰기
                </button>
            </div>
        </div>
    );
}
