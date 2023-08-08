import React, { useState } from 'react';
import DetailBox from './detailBox';
import MyTravel from './myTravel';
import ScheduleHeader from './scheduleHeader';

function ScheduleMain() {
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [scheduleCreated, setScheduleCreated] = useState(false);
    
    return (
        <div>
            {/* 상단 검색창 */}
            <ScheduleHeader 
                selectedCities={selectedCities} 
                setSelectedCities={setSelectedCities} 
                onCreateSchedule={() => {setScheduleCreated(true)}}
                scheduleCreated={scheduleCreated}
                setScheduleCreated={setScheduleCreated}
            />
            {/* 하단 검색창 */}
            <DetailBox 
                selectedCities={selectedCities} 
                setSelectedCities={setSelectedCities}
                scheduleCreated={scheduleCreated}
                setScheduleCreated={setScheduleCreated}
            />     
            {/* 내 여행 목록 */}
            <MyTravel />
        </div>
    );
}

export default ScheduleMain;
