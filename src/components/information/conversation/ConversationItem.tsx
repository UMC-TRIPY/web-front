import Image from 'next/image';

interface IConversationContent {
    id: number;
    korean: string;
    translation: string;
    pronunciation: string;
    class: string;
}

interface IConversationProps {
    content: IConversationContent;
    handleClickSpeak: any;
}

const ConversationItem = (props: IConversationProps) => {
    const { content, handleClickSpeak } = props;
    return (
        <div className={content.class}>
            <div>{content.korean}</div>
            <div className='flex items-center'>
                <div className='mr-2'>{content.translation}</div>
                <div className='flex'>
                    <Image
                        src='/images/listen.svg'
                        className='cursor-pointer'
                        onClick={() => handleClickSpeak(content.id)}
                        alt=''
                        width={40}
                        height={40}
                    />
                    <Image
                        src='/images/save.svg'
                        className='cursor-pointer'
                        alt=''
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <div className='text-[#A3A3A3]'>{content.pronunciation}</div>
        </div>
    );
};

export default ConversationItem;
