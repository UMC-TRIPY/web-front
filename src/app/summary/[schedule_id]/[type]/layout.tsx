'use client';
import CommonHeader from '@/components/summary/CommonHeader';

interface SummaryListLayoutProps {
    children: React.ReactNode;
    params: {
        type: string;
    };
}

export default function SummaryListLayout({
    children,
    params
}: SummaryListLayoutProps) {
    const { type } = params;
    const path =
        type === 'link' ? '링크' : type === 'gallery' ? '갤러리' : '파일';
    return (
        <>
            <CommonHeader path={path} />
            <div className='text-3xl font-bold mt-12 mb-5'>내 {path} 목록</div>
            {children}
        </>
    );
}
