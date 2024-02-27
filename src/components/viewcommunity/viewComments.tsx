import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import messageCircle from 'public/images/message-circle.svg'
import ConfirmBtn from "../layout/confirmBtn"
import Comments from "./comments"
import Pagination from '../maincommunity/Pagination';

interface IComment {
    nickname: string;
    content: string;
    uploaded: string;
}

export default function ViewComments() {
    const [comments, setComments] = useState<IComment[]>([]);
    const [commentText, setCommentText] = useState<string>('');

    const addComment = () => {
        if (commentText.trim() !== "") {
            const newComment = { nickname: "test", content: commentText, uploaded: "2023.8.8" };
            setComments([...comments, newComment]);
            setCommentText(" ");
        }
    };

    const totalPages = Math.ceil(comments.length / 30);
    const [current, setCurrent] = useState<number>(1);
    return (
        <div className="mx-4">
            <div className='flex mb-5'>
                <Image src={messageCircle} alt='댓글 아이콘' width={20}/>
                <span className='text-grey text-sm ml-1'>{comments.length}</span>
            </div>
            {comments.map((comment, index) => (
                <Comments 
                    key={index} 
                    nickname={comment.nickname} 
                    content={comment.content} 
                    uploaded={comment.uploaded}
                />
            ))}
            <div className="flex h-30 p-5 my-10 border border-lightgrey rounded-lg">
                <textarea
                    spellCheck="false" 
                    placeholder="댓글을 입력해보세요"
                    className="outline-none flex-grow mr-4"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <ConfirmBtn 
                    label="답글 달기"
                    color="bg-lightgrey"
                    onClick={() => {addComment()}}
                />
            </div>
            <div className='flex justify-between'>
                <ConfirmBtn 
                    label="Top △" 
                    color="bg-lightgrey"
                    onClick={() => {window.scrollTo(0, 0);}}
                />
                <Link href="/community/add">
                    <ConfirmBtn
                        label="글쓰기" 
                        color="bg-primary"
                    />
                </Link>
            </div>
            <Pagination
                totalPages={totalPages}
                current={current}
                setCurrent={setCurrent}
            />
        </div>
    )
}