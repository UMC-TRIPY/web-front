import { LiaExchangeAltSolid } from 'react-icons/lia';
import { FiEdit } from 'react-icons/fi';
import HelpBot from '../mybag/HelpBot';
import { useRecoilState, useRecoilValue } from 'recoil';
import { planIDState, scheduleState } from '@/states/schedule';
import { useRouter } from 'next/navigation';
import { Friend, InvitedFriend } from '@/types/user';
import { useEffect, useState } from 'react';
import FriendListModal from '../modal/FriendListModal';
import { getFriendList, inviteFriend } from '@/apis/user/friend';

const emptyText = {
    user_index: -1,
    nickname: '여행을 함께할 친구를 추가해보세요'
};

export default function FriendList({
    friends,
    edit
}: {
    friends: InvitedFriend[];
    edit: boolean;
}) {
    const [friendList, setFriendList] = useState<Friend[]>([]);
    const [isModal, setIsModal] = useState<boolean>(false);
    const planID = useRecoilValue(planIDState);
    const [changeMode, setChangeMode] = useRecoilState(scheduleState);
    const router = useRouter();

    const onClick = (friend: number) => {
        alert(`${friend} 삭제 완료!`);
    };
    const handleInviteSchedule = async (targetFriend: number) => {
        await inviteFriend(planID, targetFriend);
        setIsModal(false);
    };

    useEffect(() => {
        getFriendList().then((data) => {
            setFriendList(data);
        });
    }, []);

    const SharingFriend = ({ friend }: { friend: InvitedFriend }) => {
        return (
            <div className='text-xs h-8 rounded-xl bg-brightgrey py-1.5 px-2.5  mr-3 flex items-center'>
                <span className='text-darkgrey mr-2.5'>
                    {friends.length > 0
                        ? friend.nickname
                        : '여행을 함께할 친구를 추가해보세요'}
                </span>
                <span
                    className={`text-darkgrey hover:cursor-pointer ${
                        friends.length === 0 ? 'hidden' : 'block'
                    }`}
                    onClick={() => onClick(friend.user_index)}
                >
                    X
                </span>
            </div>
        );
    };

    return (
        <div>
            <div className='py-5 mb-10'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='pb-2'>일정 공유 중인 친구</div>
                        <div className='flex items-center'>
                            {friends.length === 0 && (
                                <SharingFriend friend={emptyText} />
                            )}
                            {friends.map((friend, index) => {
                                return (
                                    <SharingFriend
                                        friend={friend}
                                        key={`sharing${index}`}
                                    />
                                );
                            })}
                            <div
                                className='ml-1 h-7 w-7 bg-primary flex items-center justify-center rounded-full font-medium text-2xl hover:cursor-pointer'
                                onClick={() => setIsModal(true)}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    {isModal && (
                        <FriendListModal
                            setIsModal={setIsModal}
                            handleInviteSchedule={handleInviteSchedule}
                            friendList={friendList}
                        />
                    )}
                    <div className='flex items-center'>
                        {!edit && (
                            <>
                                <LiaExchangeAltSolid
                                    className='cursor-pointer mr-8 ml-7'
                                    size={40}
                                    onClick={() => setChangeMode(!changeMode)}
                                />
                                <FiEdit
                                    className='cursor-pointer'
                                    size={40}
                                    onClick={() =>
                                        router.push('/updateschedule')
                                    }
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* <HelpBot width='w-[1380px]' /> */}
        </div>
    );
}
