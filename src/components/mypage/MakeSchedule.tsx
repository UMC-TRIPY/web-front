import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MakeSchedule() {
    const router = useRouter();
    return (
        <div className='mt-24 pl-[88px] flex justify-between'>
            <div className='pt-16 '>
                <div className='text-3xl mb-2'>트리피와 함께</div>
                {/* <br /> */}
                <div className='text-5xl font-bold mb-7'>여행일정 만들기</div>
                <button
                    className='text-xl px-4 py-2 rounded-lg border border-dark-black'
                    onClick={() => router.push('/schedulemain')}
                >
                    바로가기
                </button>
            </div>
            <Image
                src='/images/carrier.png'
                alt='none'
                width={440}
                height={440}
            />
        </div>
    );
}
