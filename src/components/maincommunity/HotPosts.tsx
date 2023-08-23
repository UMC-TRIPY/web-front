import React, { useState, useEffect } from 'react';
import PostLists from './PostLists';
import { getPostTitle, getUserIndex, getViews, getThumbs, getCreatedAt, getUserNickname } from '@/apis/community/posts';

interface HotPostsProps {
    post_index: string;
}
export default function HotPosts({post_index}: HotPostsProps) {
    const [postTitle, setPostTitle] = useState('');
    const [views, setViews] = useState(0);
    const [thumbs, setThumbs] = useState(0);
    
    // useEffect(() => {
    //     getPostTitle(post_index).then((title) => {
    //         setPostTitle(title);
    //     });
    //     getViews(post_index).then((view) => {
    //         setViews(view);
    //     })
    //     getThumbs(post_index).then((thumb) => {
    //         setThumbs(thumb);
    //     })
    // }, []);

    const posts: [number, string, string, string, string][] = [
        [50, '오사카', '8월 오사카 여행 후기', '3', '10'],
        [51, '도쿄', '도쿄 맛집 추천해주세요!', '1', '15'],
        [52, '일본전체', '메이드 카페 후기(모에모에뀽)', '50', '127'],
        [53,
            '후쿠오카',
            '후쿠오카 비행기 값',
            '2',
            '150'
        ],
        [54, '삿포로', '삿포로 여행 추천합니다', '10', '200'],
        [55, '일본전체', '일본여행 혼자 가보신분..?', '5', '85'],
        [56,
            '도쿄',
            '시부야 근처 호텔 추천',
            '20',
            '203'
        ],
        [57, '도쿄', '돈키호테 쇼핑 리스트', '159', '513'],
        [58, '도쿄', '도쿄 8번 가본 사람의 맛집 추천', '3', '314'],
        [59, '오사카', '도톤보리 여행', '9', '104']
    ];
    return (
        <div>
            <span className='text-3xl font-bold mb-8'>인기글 TOP 10</span>
            <PostLists posts={posts} />
        </div>
    );
}
