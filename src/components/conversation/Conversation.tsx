import ConversationList from './ConversationList';

const Conversation = () => {
    return (
        <>
            <div className='flex justify-between mt-8'>
                <div className='text-3xl font-bold'>회화</div>
                <div>더보기</div>
            </div>
            <ConversationList />
        </>
    );
};

export default Conversation;
