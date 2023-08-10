import Image from 'next/image';

const datas = [
    {
        date: '6/30',
        galleries: [
            '/images/zip.png',
            '/images/hwp.png',
            '/images/pdf.png',
            '/images/pdf.png',
            '/images/zip.png',
            '/images/hwp.png'
        ]
    },
    {
        date: '7/1',
        galleries: ['/images/xlsx.png']
    },
    {
        date: '7/2',
        galleries: ['/images/pdf.png', '/images/xlsx.png', '/images/pdf.png']
    }
];

export default function FolderLists() {
    const Links = ({ data }: { data: any }) => {
        return (
            <div className='flex flex-col min-w-[197px] max-w-[197px] h-[197px] items-center justify-between mr-5'>
                <Image src={data} alt='none' width={197} height={197} />
            </div>
        );
    };
    return (
        <div className='flex flex-col'>
            {datas.map((data: any, idx: number) => {
                const items = data.galleries.length;
                return (
                    <div
                        key={`${data.date}container${idx}`}
                        className={`mb-4 ${
                            items > 6
                                ? 'overflow-x-scroll'
                                : 'overflow-x-hidden'
                        }`}
                    >
                        <div
                            key={`${data.date}${idx}`}
                            className='text-xl font-bold mb-2'
                        >
                            {data.date}
                        </div>
                        <div className='flex'>
                            {data.galleries.map((gallery: any, idx: number) => (
                                <Links
                                    key={`${data.date}galleries${idx}`}
                                    data={gallery}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
