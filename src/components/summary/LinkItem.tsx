import { FolderWithLinkProps } from '@/types/summary';
import Image from 'next/image';

interface LinkItemProps extends Record<'item', FolderWithLinkProps> {}

export default function LinkItem({ item: { url, name } }: LinkItemProps) {
    const getFaviconUrl = () =>
        `https://www.google.com/s2/favicons?domain=${url}&sz=64`;

    return (
        <div className='flex flex-col min-w-[197px] max-w-[197px] h-[197px] items-center justify-between mr-5'>
            <a
                href={url}
                className='flex flex-col items-center justify-between h-full py-3'
                target='_blank'
            >
                <Image
                    src={getFaviconUrl()}
                    width={48}
                    height={48}
                    alt='none'
                />
                <span className='break-all h-12 overflow-hidden'>{url}</span>
            </a>
            {name}
        </div>
    );
}
