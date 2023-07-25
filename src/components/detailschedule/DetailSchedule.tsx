import LabelSchedules from './LabelSchedules';
import FriendList from './FriendList';
import OtherSchedule from './OtherSchedule';
import CommonHeader from './CommonHeader';

export default function DetailSchedule() {
    return (
        <div className='mt-20'>
            {/* 공통 머리글 */}
            <CommonHeader />
            {/* 다른 일정 선택 */}
            <OtherSchedule />
            {/* 친구 목록 */}
            <FriendList />
            {/* 여행 일정 */}
            <LabelSchedules status='page' />
        </div>
    );
}
