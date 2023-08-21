'use client';
import HelpBot from '@/components/mybag/HelpBot';
import CommonHeader from '@/components/summary/CommonHeader';
import GalleryLists from '@/components/summary/GalleryLists';

export default function Page() {
    return (
        <>
            {/* <HelpBot width='w-[1380px]' /> */}
            <CommonHeader path='갤러리' />
            <div className='text-3xl font-bold mt-12 mb-5'>내 갤러리 목록</div>
            <GalleryLists />
        </>
    );
}
