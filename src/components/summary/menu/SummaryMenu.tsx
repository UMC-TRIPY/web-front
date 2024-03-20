import {
    CommonSummaryParamsProps,
    SummaryMenuDetailProps
} from '@/types/summary';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

export default function SummaryMenu({ params }: CommonSummaryParamsProps) {
    const menus: SummaryMenuDetailProps[] = useMemo(
        () => [
            { name: '링크', href: 'link', isActivated: 'link' === params.type },
            {
                name: '갤러리',
                href: 'gallery',
                isActivated: 'gallery' === params.type
            },
            {
                name: '파일목록',
                href: 'file',
                isActivated: 'file' === params.type
            }
        ],
        [params.type]
    );

    return (
        <div className='flex items-end mt-12 mb-4'>
            {menus.map(
                ({ name, href, isActivated }: SummaryMenuDetailProps) => (
                    <div
                        className='flex flex-col items-center'
                        key={`${name}-wrap`}
                    >
                        {isActivated && (
                            <Image
                                src='/images/selected.png'
                                alt='none'
                                width={16}
                                height={16}
                                key={`${name}-image`}
                            />
                        )}
                        <Link
                            className={`mx-4 font-bold hover:cursor-pointer ${
                                isActivated ? 'text-primary' : 'text-infomenu'
                            }`}
                            href={`/summary/${params.schedule_id}/${href}`}
                            key={`${name}-link`}
                        >
                            {name}
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}
