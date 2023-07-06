interface IConversationContent {
    id: number;
    korean: string;
    translation: string;
    pronunciation: string;
    class: string;
}

interface IConversationProps {
    content: IConversationContent;
}

const ConversationItem = (props: IConversationProps) => {
    const { content } = props;
    return (
        <div className={content.class}>
            <div>{content.korean}</div>
            <div>{content.translation}</div>
            <div>{content.pronunciation}</div>
        </div>
    );
};

export default ConversationItem;
