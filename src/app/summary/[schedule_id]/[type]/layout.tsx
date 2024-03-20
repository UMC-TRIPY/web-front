'use client';
import CommonHeader from '@/components/summary/CommonHeader';
import { CommonSummaryParamsProps } from '@/types/summary';

interface SummaryListLayoutProps extends CommonSummaryParamsProps {
    children: React.ReactNode;
}

export default function SummaryListLayout({
    children,
    params
}: SummaryListLayoutProps) {
    return (
        <>
            <CommonHeader params={params} />
            <div className='text-3xl font-bold mt-12 mb-5'>
                내{' '}
                {params.type === 'link'
                    ? '링크'
                    : params.type === 'gallery'
                    ? '갤러리'
                    : '파일'}{' '}
                목록
            </div>
            {children}
        </>
    );
}
