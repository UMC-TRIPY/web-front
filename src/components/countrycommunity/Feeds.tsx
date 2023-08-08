import Image from 'next/image';

export default function Feeds() {
    const feeds: [string, string, string][] = [
        ['# 오사카', '# 맛집', '/images/feed1.png'],
        ['# 후쿠오카', '# 꽃놀이', '/images/feed2.png'],
        ['# 삿포로', '# 눈축제', '/images/feed3.png']
    ];
    const FeedList = ({ feed }: { feed: [string, string, string] }) => {
        return (
            <div className='flex flex-col-reverse'>
                <Image src={feed[2]} alt='none' width={413} height={500} />
                <div className='absolute flex m-5'>
                    <div className='bg-lightgrey rounded-[38px] py-2 px-4 mr-5'>
                        {feed[0]}
                    </div>
                    <div className='bg-lightgrey rounded-[38px] py-2 px-4'>
                        {feed[1]}
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className='mb-[84px]'>
            <span className='text-3xl font-bold mb-8'>피드</span>
            <div className='flex justify-between'>
                {feeds.map((feed, idx) => (
                    <FeedList key={`feedlist${idx}`} feed={feed} />
                ))}
            </div>
        </div>
    );
}
