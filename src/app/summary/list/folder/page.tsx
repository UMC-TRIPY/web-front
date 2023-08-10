'use client';
import HelpBot from '@/components/mybag/HelpBot';
import CommonHeader from '@/components/summary/CommonHeader';
import FolderLists from '@/components/summary/FolderLists';

export default function Page() {
    return (
        <>
            <HelpBot width='w-[1380px]' />
            <CommonHeader path='파일목록' />
            <div className='text-3xl font-bold mt-12 mb-5'>내 갤러리 목록</div>
            <FolderLists />
        </>
    );
}
