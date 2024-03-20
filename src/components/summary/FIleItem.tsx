import { CommonURLProps } from '@/types/summary';
import Image from 'next/image';

export default function FileItem({ url }: CommonURLProps) {
    // 파일 확장자별로 폴더 네이밍 해야됨
    return <Image src={url} alt='none' width={197} height={197} />;
}
