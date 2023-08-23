import PostLists from '../maincommunity/PostLists';

export default function HotPosts({ country }: { country: string }) {
    const posts: [string, string, string, string][] = [
        ['오사카', '8월 오사카 여행 후기', '9,999', '9,999K'],
        ['도쿄', '도쿄에서 이런 사람 조심하세요', '9,999', '9,999K'],
        ['일본전체', '메이드 카페 후기(모에모에뀽)', '9,999', '9,999K'],
        [
            '후쿠오카',
            '후쿠오카 비행기 20만원...비싼건가요..?',
            '9,999',
            '9,999K'
        ],
        ['삿포로', '여름인데 눈이 보고 싶을 땐 삿포로에!', '9,999', '9,999K']
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
