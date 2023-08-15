import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ProfilePic() {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [imageSrc, setImageSrc]: any = useState('/images/profilePicLg.svg');

    const handleClickProfile = () => {
        if (fileRef.current) fileRef.current.click();
    };

    const handleChangeFile = (e: any) => {
        const file = e.target.files[0];
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
