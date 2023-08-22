import React, { useState, useEffect } from 'react';
import { getPostContent } from '@/apis/community/posts';

export default function ViewContent() {
    const [postContent, setPostContent] = useState('');
    let post_index = 2;

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