import ContentItem from './ContentItem';

const ContentList = (props: any) => {
    const { contents } = props;
    return (
        <div className='content-list'>
            {contents.map((content: any, idx: number) => (
                <ContentItem content={content} key={idx} />
            ))}
        </div>
    );
};

export default ContentList;
