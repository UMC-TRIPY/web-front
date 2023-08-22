import { Friend } from '@/types/user';
import { useState } from 'react';
import Follower from './follower';
import Following from './following';
import SendFollow from './sendFollow';

interface IFriendReqProps {
    handleFriendList: (result: Friend[]) => void;
}

function FriendReq({ handleFriendList }: IFriendReqProps) {
    const [friendRequestList, setFriendRequestList] = useState<Friend[]>([]);

    const handleFriendRequest = (result: Friend[]) => {
        setFriendRequestList([...friendRequestList, ...result]);
    };

    return (
        <div className='flex justify-start mt-14 mb-48'>
            <div className='w-1/2'>
                {/* 친구 요청 보내기 */}
                <SendFollow handleFriendRequest={handleFriendRequest} />
            </div>
            <div className='flex-col w-1/2'>
                {/* 내가 보낸 요청 */}
                <Following
                    friendRequestList={friendRequestList}
                    setFriendRequestList={setFriendRequestList}
                />
                {/* 친구 요청 */}
                <Follower handleFriendList={handleFriendList} />
            </div>
        </div>
    );
}

export default FriendReq;
