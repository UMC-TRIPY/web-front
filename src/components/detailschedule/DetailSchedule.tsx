import LabelSchedules from './LabelSchedules';
import FriendList from './FriendList';
import OtherSchedule from './OtherSchedule';
import CommonHeader from './CommonHeader';

const friends: string[] = [
    '미리',
    '메이',
    '루카',
    '규',
    '레니',
    '시미',
    '초이',
    '폴',
    '에그먼'
];

export default function DetailSchedule() {
    return (
        <div className='mt-20'>
            {/* 공통 머리글 */}
            <CommonHeader />
            {/* 다른 일정 선택 */}
            <OtherSchedule href='schedulemain' />
            {/* 친구 목록 */}
            <FriendList friends={friends} />
            {/* 여행 일정 */}
            <LabelSchedules status='page' />
        </div>
    );
}
