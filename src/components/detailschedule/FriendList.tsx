import { LiaExchangeAltSolid } from 'react-icons/lia';
import { FiEdit } from 'react-icons/fi';
import HelpBot from '../mybag/HelpBot';
import { useRecoilState } from 'recoil';
import { scheduleState } from '@/states/schedule';

export default function FriendList({ friends }: { friends: string[] }) {
    const onClick = (friend: string) => {
        alert(`${friend} 삭제 완료!`);
    };

    const [changeMode, setChangeMode] = useRecoilState(scheduleState);

    const SharingFriend = ({ friend }: { friend: string }) => {
        return (
            <div className='text-xs h-8 rounded-xl bg-brightgrey py-1.5 px-2.5  mr-3 flex items-center'>
                <span className='text-darkgrey mr-2.5'>{friend}</span>
                <span
                    className={`text-darkgrey hover:cursor-pointer ${
                        friends.length === 0 ? 'hidden' : 'blcok'
                    }`}
                    onClick={() => onClick(friend)}
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
                            {friends.length === 0 ? (
                                <SharingFriend friend='여행을 함께할 친구를 추가해보세요' />
                            ) : (
                                friends.map((friend, index) => {
                                    return (
                                        <SharingFriend
                                            friend={friend}
                                            key={`sharing${index}`}
                                        />
                                    );
                                })
                            )}
                            <div className='ml-1 h-7 w-7 bg-primary flex items-center justify-center rounded-full font-medium text-2xl hover:cursor-pointer'>
                                +
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <LiaExchangeAltSolid
                            className='hover:cursor-pointer mr-8 ml-7'
                            size={40}
                            onClick={() => setChangeMode(!changeMode)}
                        />
                        <FiEdit className='hover:cursor-pointer' size={40} />
                    </div>
                </div>
            </div>
            <HelpBot width='w-[1380px]' />
        </div>
    );
}
