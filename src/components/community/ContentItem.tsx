import Image from 'next/image';
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
                lineHeight: '2.5',
                color: '#A3A3A3'
            }}
        >
            <div style={{ flexBasis: '5%' }}>
                <Image src={content.imageSrc} alt='' width={30} height={30} />
            </div>
            <div style={{ flexBasis: '10%' }}>{content.nickName}</div>
            <div style={{ flexBasis: '50%' }}>{content.title}</div>
            <div
                style={{
                    display: 'flex',
                    flexBasis: '8%',
                    justifyContent: 'space-between'
                }}
            >
                <Image src='/images/like.svg' alt='' width={20} height={20} />
                {content.like}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexBasis: '8%',
                    justifyContent: 'space-between'
                }}
            >
                <Image src='/images/view.svg' alt='' width={20} height={20} />
                {content.view}
            </div>
        </div>
    );
};

export default ContentItem;
