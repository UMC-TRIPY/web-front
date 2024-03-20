import { CommonHrefProps } from '@/types/summary';
import Image from 'next/image';

export default function FileItem({ href }: CommonHrefProps) {
    // 파일 확장자별로 폴더 네이밍 해야됨
    return <Image src={href} alt='none' width={197} height={197} />;
}
