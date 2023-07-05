import React from 'react';

const ContentItem = (props: any) => {
    const { content } = props;
    return (
        <div
            className='content'
            style={{ display: 'flex', justifyContent: 'space-between' }}
        >
            <div>이미지</div>
            <div>닉네임</div>
            <div>제목</div>
            <div>좋아요</div>
            <div>뷰 {content}</div>
        </div>
    );
};

export default ContentItem;
