'use client';
import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import HelpBot from '@/components/mybag/HelpBot';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    link: string;
    name: string;
}

const lists: string[][] = [
    ['link', '링크'],
    ['gallery', '갤러리'],
    ['folder', '파일목록']
];

export default function Page() {
    const List = ({ link, name }: Props) => {
        return (
            <Link
                href={`/summary/list/${link}`}
                className='flex flex-col items-center mr-5 text-xl hover:cursor-pointer'
            >
                <Image
                    src={`/images/${link}.png`}
                    alt='link'
                    width={305}
                    height={305}
                />
                {name}
            </Link>
        );
    };
    return (
        <div className='pt-28'>
            <OtherSchedule href='summary' register={false} />
            <div className='flex'>
                {lists.map((list, idx) => (
                    <List key={`lists${idx}`} link={list[0]} name={list[1]} />
                ))}
            </div>
            {/* <HelpBot width='w-[1380px]' /> */}
        </div>
    );
}
