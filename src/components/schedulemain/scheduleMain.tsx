import DetailBox from "./detailBox";
import MyTravel from "./myTravel";
import ScheduleHeader from "./scheduleHeader";

function scheduleMain () {
    return (
        <div>
            <ScheduleHeader />
            <DetailBox />     
            <MyTravel /> 
        </div>
    )
}

export default scheduleMain;