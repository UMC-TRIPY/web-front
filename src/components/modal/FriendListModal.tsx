import { Friend } from '@/types/user';
import React from 'react';
import FriendOneBtn from '../mypagefriend/friendOneBtn';
import Modal from './Modal';

const FriendListModal = ({
    setIsModal,
    handleInviteSchedule,
    friendList
}: any) => {
    return (
        <Modal
            modalMode={0}
            title='일정 목록'
            setModalState={setIsModal}
            onClickCompleteButton={() => setIsModal(false)}
            completeText=''
        >
            <div className='mx-4 py-4'>
                <div className='h-96 overflow-scroll overflow-x-hidden'>
                    {friendList.map((friend: Friend, index: number) => (
                        <FriendOneBtn
                            key={index}
                            name={friend.nickname}
                            label1='초대하기'
                            px={6}
                            onClick={() =>
                                handleInviteSchedule(friend.user_index)
                            }
                        />
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default FriendListModal;
