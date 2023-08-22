import React, { useState } from 'react';
import DetailBox from './detailBox';
import MyTravel from './myTravel';
import ScheduleHeader from './scheduleHeader';

function ScheduleMain() {
    const [selectedCities, setSelectedCities] = useState<string>('');
    console.log(selectedCities);
    return (
        <div>
            {/* 상단 검색창 */}
            <ScheduleHeader
                selectedCities={selectedCities}
                setSelectedCities={setSelectedCities}
            />
            {/* 하단 검색창 */}
            <DetailBox
                selectedCities={selectedCities}
                setSelectedCities={setSelectedCities}
            />
            {/* 내 여행 목록 */}
            <MyTravel status='page' />
        </div>
    );
}

export default ScheduleMain;
