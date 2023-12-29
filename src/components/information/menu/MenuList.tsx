import { MenuProps } from '@/types/menu';
import Image from 'next/image';

export default function MenuList({
    name,
    offsetTop,
    isIntersected
}: MenuProps) {
    return (
        <div className='flex flex-col items-center'>
            {isIntersected && (
                <Image
                    src='/images/selected.png'
                    alt='none'
                    width={16}
                    height={16}
                />
            )}
            <span
                className={
                    isIntersected
                        ? 'text-primary mx-4 font-bold hover:cursor-pointer'
                        : 'text-infomenu mx-4 font-bold hover:cursor-pointer'
                }
                onClick={() => {
                    scrollTo({ top: offsetTop, behavior: 'smooth' });
                }}
            >
                {name}
            </span>
        </div>
    );
}
