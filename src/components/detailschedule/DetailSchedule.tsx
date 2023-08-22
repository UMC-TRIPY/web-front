import LabelSchedules from './LabelSchedules';
import FriendList from './FriendList';
import OtherSchedule from './OtherSchedule';
import CommonHeader from './CommonHeader';
import { planIDState, scheduleState } from '@/states/schedule';
import { useRecoilValue } from 'recoil';
import BlockSchedule from './BlockSchedule';
import { getInvitedFriendList } from '@/apis/user/friend';
import { useEffect, useState } from 'react';
import { InvitedFriend } from '@/types/user';

export default function DetailSchedule() {
    const mode = useRecoilValue(scheduleState);

    const planID = useRecoilValue(planIDState);
    const [invitedFriendList, setInvitedFriendList] = useState<InvitedFriend[]>(
        []
    );

    useEffect(() => {
        getInvitedFriendList(planID).then((data) => {
            console.log('invitedFriendList planID:', planID);
            console.log('invitedFriendList:', data);
            setInvitedFriendList(data);
        });
    }, []);

    return (
        <div className='mt-20'>
            {/* 공통 머리글 */}
            <CommonHeader />
            {/* 다른 일정 선택 */}
            <OtherSchedule
                href='schedulemain'
                register={false}
                top='top-[460px]'
            />
            {/* 친구 목록 */}
            <FriendList friends={invitedFriendList} edit={false} />
            {/* 여행 일정 */}
            {mode ? <BlockSchedule /> : <LabelSchedules status='page' />}
        </div>
    );
}
