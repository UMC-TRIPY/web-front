import Image from 'next/image';
import ConversationList from './ConversationList';
import Translation from './Translation';

const Conversation = () => {
    return (
        <div className='mb-32' id='conversation'>
            <div className='flex justify-between mt-8'>
                <div className='text-3xl font-bold'>회화</div>
                <div className='text-[#A3A3A3]'>더보기 {'>'}</div>
            </div>
            <ConversationList />
        </div>
    );
};

export default Conversation;
