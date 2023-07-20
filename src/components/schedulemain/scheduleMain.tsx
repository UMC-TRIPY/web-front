import DetailBox from "./detailBox";
import MyTravel from "./myTravel";
import ScheduleHeader from "./scheduleHeader";

function scheduleMain () {
    return (
        <div>
            {/* 상단 검색창 */}
            <ScheduleHeader />
            {/* 하단 검색창 */}
            <DetailBox />     
            {/* 내 여행 목록 */}
            <MyTravel /> 
        </div>
    )
}

export default scheduleMain;