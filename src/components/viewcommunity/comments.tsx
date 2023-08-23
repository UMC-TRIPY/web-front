import Image from "next/image"
import ProfilePic from 'public/images/user.svg'

interface CommentsProp {
    nickname: string,
    content: string,
    uploaded: string,
}

export default function Comments({nickname, content, uploaded}: CommentsProp) {
    return (
        <div className="flex border-t border-lightgrey py-4">
            <div className='flex'>
                <div className='w-10 h-10 mr-4'>
                    <Image src={ProfilePic} alt="프로필 사진" width={40}/>
                </div>
                <div className='flex-col'>
                    <div className="text-sm mb-1.5">
                        {nickname}
                    </div>
                    <div className='mb-1'>
                        {content}
                    </div>
                    <div className="text-sm text-grey">
                        {uploaded}
                    </div>
                </div>
            </div>
        </div>
    )
}