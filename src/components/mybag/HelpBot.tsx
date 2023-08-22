import Image from 'next/image';

export default function HelpBot({ width }: { width: string }) {
    return (
        <div className={`absolute bottom-[200px] flex justify-end ${width}`}>
            <Image
                className='fixed hover:cursor-pointer'
                src='/images/helpbot.png'
                alt='none'
                width={100}
                height={100}
            />
        </div>
    );
}
