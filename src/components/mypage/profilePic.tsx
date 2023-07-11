export default function ProfilePic () {
    return (
        <div className="w-auto h-80 flex justify-center items-center">
            <img src="/images/profilePicLg.svg" alt="프로필 사진" />
            <img 
                src="/images/changePic.svg" 
                alt="프로필 사진 변경" 
                className="relative top-8 right-8 z-10"
            />
        </div>
    )
}