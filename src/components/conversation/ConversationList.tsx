import { useState } from 'react';
import ConversationItem from './ConversationItem';

interface IConversationContent {
    id: number;
    korean: string;
    translation: string;
    pronunciation: string;
    class: string;
}

const ConversationList = () => {
    const [contents, setContents] = useState<IConversationContent[]>([
        {
            id: 0,
            korean: '이거 얼마예요?',
            translation: 'これはいくらですか？',
            pronunciation: '코레와 이쿠라데스카?',
            class: 'flex flex-col gap-y-3'
        },
        {
            id: 1,
            korean: '여기 가려면 어떻게 가야해요?',
            translation: 'ここに行くにはどうやって行けばいいですか？',
            pronunciation: '코코니 이쿠니와 도오 얏테이케바 이이데스카?',
            class: 'flex flex-col gap-y-3 pt-4 border-t-2'
        },
        {
            id: 2,
            korean: '저기요, 주문할게요.',
            translation: 'すみません、注文します。',
            pronunciation: '스미마세, 추우몬시마스.',
            class: 'flex flex-col gap-y-3 pt-4 border-t-2'
        }
    ]);
    return (
        <div className='flex flex-col gap-y-5 mt-4'>
            {contents.map((content) => (
                <ConversationItem content={content} key={content.id} />
            ))}
        </div>
    );
};

export default ConversationList;
