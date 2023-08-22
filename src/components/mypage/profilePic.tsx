import { IUser } from '@/types/user';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface IProfilePicProps {
    userData: IUser;
    handleProfileImage: (profileImg: string) => void;
}

export default function ProfilePic({
    userData,
    handleProfileImage
}: IProfilePicProps) {
    const fileRef = useRef<HTMLInputElement | null>(null);

    // TODO: 이미지를 불러올 때 링크가 public 이미지거나 http 로 시작해야 한다
    // const [imageSrc, setImageSrc] = useState<any>(
    //     userData.profileImg || '/images/profilePicLg.svg'
    // );
    const [imageSrc, setImageSrc] = useState<any>('/images/profilePicLg.svg');

    const handleClickProfile = () => {
        if (fileRef.current) fileRef.current.click();
    };

    const handleChangeFile = (e: any) => {
        const file = e.target.files[0];
        handleProfileImage(file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise<void>((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    };

    return (
        <div className='w-auto h-80 flex justify-center items-center'>
            <input
                ref={fileRef}
                type='file'
                id='fileUpload'
                style={{ display: 'none' }}
                onChange={handleChangeFile}
            />
            <Image
                src={imageSrc}
                alt='프로필 사진'
                width={200}
                height={200}
                onClick={handleClickProfile}
                priority
            />
            <Image
                src='/images/changePic.svg'
                alt='프로필 사진 변경'
                width={40}
                height={40}
                className='relative top-8 right-8 z-10'
                priority
            />
        </div>
    );
}
