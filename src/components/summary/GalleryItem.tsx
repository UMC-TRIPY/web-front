import { CommonURLProps } from '@/types/summary';
import Image from 'next/image';

export default function GalleryItem({ url }: CommonURLProps) {
    return <Image src={url} alt='none' width={197} height={197} />;
}
