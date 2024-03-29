'use client';
import OtherSchedule from '@/components/detailschedule/OtherSchedule';
import HelpBot from '@/components/mybag/HelpBot';
import { CommonSummaryParamsProps } from '@/types/summary';
import Image from 'next/image';
import Link from 'next/link';

interface ListProps {
    href: string;
    title: string;
}

const lists: ListProps[] = [
    { href: 'link', title: '링크' },
    { href: 'gallery', title: '갤러리' },
    { href: 'file', title: '파일' }
];

export default function SummaryListPage({ params }: CommonSummaryParamsProps) {
    const { schedule_id } = params;

    return (
        <div className='pt-28'>
            <OtherSchedule href='summary' register={false} top='top-[290px]' />
            <div className='flex'>
                {lists.map((list) => (
                    <Link
                        key={list.href}
                        href={`/summary/${schedule_id}/${list.href}`}
                        className='flex flex-col items-center mr-5 text-xl hover:cursor-pointer'
                    >
                        <Image
                            key={`${list.href}-title`}
                            src={`/images/${list.href}.png`}
                            alt='link'
                            width={305}
                            height={305}
                        />
                        {list.title}
                    </Link>
                ))}
            </div>
            {/* <HelpBot width='w-[1380px]' /> */}
        </div>
    );
}
