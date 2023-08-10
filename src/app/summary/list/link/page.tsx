'use client';
import HelpBot from '@/components/mybag/HelpBot';
import CommonHeader from '@/components/summary/CommonHeader';
import LinkLists from '@/components/summary/LinkLists';

export default function Page() {
    return (
        <>
            <HelpBot width='w-[1380px]' />
            <CommonHeader path='링크' />
            <div className='text-3xl font-bold mt-12 mb-5'>내 링크 목록</div>
            <LinkLists />
        </>
    );
}
