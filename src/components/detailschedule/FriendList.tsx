import { LiaExchangeAltSolid } from 'react-icons/lia';
import { FiEdit } from 'react-icons/fi';

export default function FriendList() {
    const friends = [
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
    const onClick = (friend: string) => {
        alert(`${friend} 삭제 완료!`);
    };
    return (
        <div>
            <div className='py-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='pb-2'>일정 공유 중인 친구</div>
                        <div className='flex items-center'>
                            {friends.map((friend, index) => {
                                return (
                                    <div
                                        key={`frcon${index}`}
                                        className='text-xs h-8 rounded-xl bg-brightgrey py-1.5 px-2.5  mr-3 flex items-center'
                                    >
                                        <span
                                            key={`frname${index}`}
                                            className='text-darkgrey mr-2.5'
                                        >
                                            {friend}
                                        </span>
                                        <span
                                            key={`frdel${index}`}
                                            className='text-darkgrey hover:cursor-pointer'
                                            onClick={() => onClick(friend)}
                                        >
                                            X
                                        </span>
                                    </div>
                                );
                            })}
                            <div className='ml-1 h-7 w-7 bg-primary flex items-center justify-center rounded-full font-medium text-2xl hover:cursor-pointer'>
                                +
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            className='h-[70px] hover:cursor-pointer'
                            src='/images/helpbot.png'
                            alt='none'
                        />
                        <LiaExchangeAltSolid
                            className='hover:cursor-pointer mr-8 ml-7'
                            size={40}
                        />
                        <FiEdit className='hover:cursor-pointer' size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}