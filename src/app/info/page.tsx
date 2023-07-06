'use client';

import React from 'react';
import 'react-calendar/dist/Calendar.css'; // css import
import InfoMenus from '@/components/infomenu/InfoMenus';
import InfoCity from '@/components/infocity/InfoCity';

export default function Page() {
    return (
        <div>
            {/* 화면 위치 및 검색 기능 부분 */}
            <InfoMenus />
            {/* 여행 도시 관한 정보 부분 */}
            <InfoCity />
        </div>
    );
}
