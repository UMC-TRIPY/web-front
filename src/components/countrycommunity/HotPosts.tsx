import PostLists from '../maincommunity/PostLists';

export default function HotPosts({ country }: { country: string }) {
    const posts: [number, string, string, string, string][] = [
        [50, '오사카', '8월 오사카 여행 후기', '3', '10'],
        [51, '도쿄', '도쿄 맛집 추천해주세요!', '1', '15'],
        [52, '일본전체', '메이드 카페 후기(모에모에뀽)', '50', '127'],
        [53, '후쿠오카', '후쿠오카 비행기 값', '2', '150'],
        [54, '삿포로', '삿포로 여행 추천합니다', '10', '200']
    ];

    return (
        <div>
            <div className='text-5xl font-bold mb-10'>{country}</div>
            <span className='text-3xl font-bold mb-8'>
                {country} 인기글 TOP 5
            </span>
            <PostLists posts={posts} />
        </div>
    );
}
