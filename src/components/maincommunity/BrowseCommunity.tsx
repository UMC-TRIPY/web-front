import Image from 'next/image';

export default function BrowseCommunity() {
    const reviewComu: [string, string, string][] = [
        [
            '/images/realreview.png',
            '트리피 유저의 찐 여행 후기 만나보기',
            '# 여행후기'
        ],
        ['/images/jmt.png', '트리피 유저의 찐 해외 맛집 알아보기', '# 맛집후기']
    ];
    const travelComu: [string, string][] = [
        ['/images/japancomu.png', '일본'],
        ['/images/europecomu.png', '유럽'],
        ['/images/vietnamcomu.png', '베트남']
    ];

    const Container = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className='flex flex-col justify-between text-center'>
                {children}
            </div>
        );
    };

    const ReviewComu = ({ review }: { review: [string, string, string] }) => {
        return (
            <div className='mb-5'>
                <Image src={review[0]} alt='none' width={630} height={324} />
                <div className='py-4 border rounded-b-[20px]'>
                    <span>{review[1]}</span>
                    <br />
                    <span>{review[2]}</span>
                </div>
            </div>
        );
    };

    const TravelComu = ({ travel }: { travel: [string, string] }) => {
        return (
            <div className='mb-5'>
                <Image src={travel[0]} alt='none' width={630} height={180} />
                <div className='py-4 border rounded-b-[20px]'>
                    <span>트리피와 함께 {travel[1]} 여행</span>
                    <br />
                    <span># {travel[1]} 커뮤니티</span>
                </div>
            </div>
        );
    };

    return (
        <div className='flex flex-col mb-[84px]'>
            <span className='text-3xl font-bold mb-8'>커뮤니티 둘러보기</span>
            <div className='flex justify-between'>
                <Container>
                    {reviewComu.map(
                        (review: [string, string, string], idx: number) => (
                            <ReviewComu
                                key={`reviewcomu${idx}`}
                                review={review}
                            />
                        )
                    )}
                </Container>
                <Container>
                    {travelComu.map((travel: [string, string], idx: number) => (
                        <TravelComu key={`travelcomu${idx}`} travel={travel} />
                    ))}
                </Container>
            </div>
        </div>
    );
}
