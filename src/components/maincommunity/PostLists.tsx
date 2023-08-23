import Image from 'next/image';
import Link from 'next/link';
interface Props {
    posts: [string, string, string, string][];
}

export default function PostLists({ posts }: Props) {
    const Post = ({ post }: { post: [string, string, string, string] }) => {
        // 공백을 '-'로 치환
        const encodedTitle = encodeURIComponent(post[1].replaceAll(' ', '-'));
        
        return (
            <div className='flex justify-between items-center my-2'>
                <div className='flex w-[84%] items-center'>
                    <div className='w-[10%] border border-grey rounded text-center mr-[60px] text-grey py-0.5'>
                        {post[0]}
                    </div>
                    <div>
                    <Link href={`/community/view/dummy/${encodedTitle}`}>
                        {post[1]}
                    </Link>
                    </div>
                </div>
                <div className='flex text-grey'>
                    <Image
                        src='/images/like.svg'
                        alt=''
                        width={20}
                        height={20}
                        className='mr-4'
                    />
                    <span className='mr-8'>{post[2]}</span>
                    <Image
                        src='/images/view.svg'
                        alt=''
                        width={20}
                        height={20}
                        className='mr-4'
                    />
                    <span>{post[3]}</span>
                </div>
            </div>
        );
    };
    return (
        <div className='flex flex-col mt-6 mb-[76px]'>
            {posts.map((post, idx) => {
                return <Post key={`posts${idx}`} post={post} />;
            })}
        </div>
    );
}
