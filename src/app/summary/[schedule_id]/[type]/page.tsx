import FileItem from '@/components/summary/FIleItem';
import GalleryItem from '@/components/summary/GalleryItem';
import LinkItem from '@/components/summary/LinkItem';
import {
    FolderWithLinkProps,
    ItemWithLinkProps,
    ItemWithoutLinkProps
} from '@/types/summary';

interface SummaryListItemPageProps {
    params: {
        type: 'link' | 'folder' | 'gallery';
    };
}

export default function SummaryListItemPage({
    params
}: SummaryListItemPageProps) {
    const { type } = params;
    const datas: ItemWithLinkProps[] | ItemWithoutLinkProps[] = [];
    return (
        <div className='flex flex-col'>
            {datas.map(
                (
                    data: ItemWithoutLinkProps | ItemWithLinkProps,
                    idx: number
                ) => (
                    <div
                        key={`${data.date}container${idx}`}
                        className={`mb-4 overflow-auto`}
                    >
                        <span
                            key={`${data.date}${idx}`}
                            className='text-xl font-bold mb-2'
                        >
                            {data.date}
                        </span>
                        <div className='flex gap-5'>
                            {data.folder.map((folder) => (
                                <>
                                    {type === 'link' && (
                                        <LinkItem
                                            item={folder as FolderWithLinkProps}
                                        />
                                    )}
                                    {type === 'folder' && (
                                        <FileItem href={folder as string} />
                                    )}
                                    {type === 'gallery' && (
                                        <GalleryItem href={folder as string} />
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
