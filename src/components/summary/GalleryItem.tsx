import { CommonHrefProps } from '@/types/summary';
import Image from 'next/image';

export default function GalleryItem({ href }: CommonHrefProps) {
    return <Image src={href} alt='none' width={197} height={197} />;
}
