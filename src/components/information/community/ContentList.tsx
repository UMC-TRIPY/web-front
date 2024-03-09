import { IContent } from './Community';
import ContentItem from './ContentItem';

interface IContentListProp {
    contents: IContent[];
}

const ContentList = ({ contents }: IContentListProp) => {
    return (
        <div className='mt-7 mb-2'>
            {contents.map((content: IContent, idx: number) => (
                <ContentItem content={content} key={idx} />
            ))}
        </div>
    );
};

export default ContentList;
