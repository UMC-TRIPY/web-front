import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LocationProps {
    name: string;
    lat: string;
    lng: string;
}

interface ContentsProps {
    city: LocationProps[];
    hotPlaceImags: string[];
}

export default function Places({
    city,
    hotPlaceImgs
}: {
    city: LocationProps[] | undefined;
    hotPlaceImgs: string[] | undefined;
}) {
    const [contents, setContents] = useState<any>();
    // const contents = {
    //     city,
    //     hotPlaceImgs
    // };
    useEffect(() => {
        let tmp: any[] = [];
        if (city !== undefined && hotPlaceImgs !== undefined) {
            for (let i = 0; i < 4; i++) {
                tmp.push({ name: city[i].name, img: hotPlaceImgs[i] });
            }
        }
        setContents(tmp);
    }, []);
    console.log(contents);
    const City = ({ content }: { content: any }) => {
        return (
            <div className='flex min-w-[305px] h-[400px]'>
                <Image src={content.img} alt='none' width={305} height={400} />
                <div className='absolute flex flex-col justify-between h-[400px] px-8 py-7'>
                    <div>
                        <div className='font-bold text-2xl'>{content.name}</div>
                        <div className='text-sm'>999개의 리뷰</div>
                    </div>
                    <button className='w-[104px] h-11 rounded-md opacity-75 bg-white hover:opacity-100'>
                        둘러보기
                    </button>
                </div>
            </div>
        );
    };
    return (
        <div className='my-5 flex justify-between'>
            {contents === undefined
                ? ''
                : contents.map((content: any, idx: number) => (
                      <City key={`content${idx}`} content={content} />
                  ))}
        </div>
    );
}
