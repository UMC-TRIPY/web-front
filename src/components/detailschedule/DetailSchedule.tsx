import LabelSchedules from './LabelSchedules';
import FriendList from './FriendList';
import OtherSchedule from './OtherSchedule';
import CommonHeader from './CommonHeader';
import { scheduleState } from '@/states/schedule';
import { useRecoilValue } from 'recoil';
import BlockSchedule from './BlockSchedule';

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
    const mode = useRecoilValue(scheduleState);
    return (
        <div className='mt-20'>
            {/* 공통 머리글 */}
            <CommonHeader />
            {/* 다른 일정 선택 */}
            <OtherSchedule href='schedulemain' register={true} />
            {/* 친구 목록 */}
            <FriendList friends={friends} edit={false} />
            {/* 여행 일정 */}
            {mode ? <BlockSchedule /> : <LabelSchedules status='page' />}
        </div>
    );
}
