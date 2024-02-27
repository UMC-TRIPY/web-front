import React, { useState, useEffect } from 'react';
import { getPostContent } from '@/apis/community/get';

interface ViewContentProps {
    post_index: string;
}

export default function ViewContent({post_index}: ViewContentProps) {
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        getPostContent(post_index).then((content) => {
            setPostContent(content);
        });
    }, []);

    return (
        <div className='mx-4 mb-16'>
            <div>
                {postContent}
            </div>
        </div>
    )
}