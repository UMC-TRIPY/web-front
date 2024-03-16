import Image from 'next/image';

export default function CarrierHandle() {
    return (
        <div className='flex flex-col items-center'>
            <Image
                src='/images/carrierHandle.svg'
                alt='캐리어 손잡이'
                width={226}
                height={64}
                priority={true}
            />
            <span className='absolute text-white text-xl pt-1'>캐리어</span>
            <div className='flex gap-40'>
                <div className='w-7 h-12 bg-lightgrey' />
                <div className='w-7 h-12 bg-lightgrey' />
            </div>
        </div>
    );
}
