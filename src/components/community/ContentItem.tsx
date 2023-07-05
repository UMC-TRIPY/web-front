import React from 'react';

const ContentItem = (props: any) => {
    const { content } = props;
    return (
        <div
            className='content'
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                lineHeight: '2.5'
            }}
        >
            <div>
                <img src={content.imageSrc} />
            </div>
            <div>{content.nickName}</div>
            <div>{content.title}</div>
            <div>{content.like}</div>
            <div>{content.view}</div>
        </div>
    );
};

export default ContentItem;
