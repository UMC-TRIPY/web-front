'use client';

import InfoMenus from '@/components/infomenu/InfoMenus';
import InfoCity from '@/components/infocity/InfoCity';
import Community from '@/components/community/Community';
import Conversation from '@/components/conversation/Conversation';
import HotPlace from '@/components/hotplace/HotPlace';
import RecoPrep from '@/components/recoprep/RecoPrep';

const info = () => {
    return (
        <div>
            {/* 화면 위치 및 검색 기능 부분 */}
            <InfoMenus />
            {/* 여행 도시 관한 정보 부분 */}
            <InfoCity />
            {/* 인기 여행지 */}
            <HotPlace />
            {/* 추천 준비물 */}
            <RecoPrep />
            <Community />
            <Conversation />
        </div>
    );
};

export default info;
