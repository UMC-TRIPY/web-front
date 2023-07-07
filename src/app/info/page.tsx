'use client';

import InfoMenus from '@/components/infomenu/InfoMenus';
import InfoCity from '@/components/infocity/InfoCity';
import Community from '@/components/community/Community';
import Conversation from '@/components/conversation/Conversation';

const info = () => {
    return (
        <div className='w-3/5 m-auto mt-4'>
            {/* 화면 위치 및 검색 기능 부분 */}
            <InfoMenus />
            {/* 여행 도시 관한 정보 부분 */}
            <InfoCity />
            <Community />
            <Conversation />
        </div>
    );
};

export default info;
