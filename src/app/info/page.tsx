import Community from '@/components/community/Community';
import Conversation from '@/components/conversation/Conversation';

const info = () => {
    return (
        <div className='w-3/5 m-auto mt-4'>
            <Community />
            <Conversation />
        </div>
    );
};

export default info;
