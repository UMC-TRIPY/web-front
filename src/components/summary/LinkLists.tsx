import { useRouter } from 'next/navigation';

interface Props {
    date: string;
    schedule: [string, string][];
}

const datas: Props[] = [
    {
        date: '6/30',
        schedule: [
            ['https://blog.naver.com/fjqm2676/223138233937', '아침'],
            [
                'https://hotels.naver.com/item?hotelFileName=hotel%3AHotel_Camelia_Busan&adultCnt=2&checkIn=2023-08-17&checkOut=2023-08-18',
                '숙소 체크인'
            ],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁'],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁'],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁'],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁'],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁'],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁'],
            ['https://blog.naver.com/kkimyuu/223177003898', '저녁']
        ]
    },
    {
        date: '7/1',
        schedule: [
            [
                'https://blog.naver.com/goddns353/223160684205?&isInf=true&infParams=eyJzY2lkIjoxMTExNjEyNjgyMzY0MTYsInNraWQiOjM2MDQwNTg2NjczMjYwOCwiY2lkIjo1ODc1ODU5MzA2Nzc5NTIsInF1ZXJ5IjoiJUVCJUI2JTgwJUVDJTgyJUIwJUVCJUExJUFGJUVCJThEJUIwJUVDJTlCJTk0JUVCJTkzJTlDIn0=',
                '부산 롯데월드'
            ]
        ]
    },
    {
        date: '7/2',
        schedule: [
            ['https://blog.naver.com/lordlysj/223158435385', '점심'],
            [
                'https://blog.naver.com/dagamdagam/223175578985?&isInf=true&infParams=eyJzY2lkIjoxMTExNjEyNjgyMzY0MTYsInNraWQiOjM2MDQwNTg2Njc5NDA0OCwiY2lkIjo1OTM1NzYwNTEwNDg0NDgsInF1ZXJ5IjoiJUVCJUI2JTgwJUVDJTgyJUIwJUVEJTk1JUI0JUVCJUE2JUFDJUVCJThCJUE4JUVBJUI4JUI4In0=',
                '해리단길'
            ]
        ]
    }
];
export default function LinkLists() {
    const getFaviconUrl = (url: string) => {
        // Google Favicon 서비스를 사용하여 favicon URL 생성
        return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
    };
    const router = useRouter();
    const Links = ({ data }: { data: [string, string] }) => {
        return (
            <div className='flex flex-col min-w-[197px] max-w-[197px] h-[197px] items-center justify-between mr-5'>
                <div className='flex flex-col items-center justify-between h-full py-3'>
                    <img
                        src={getFaviconUrl(data[0])}
                        alt='none'
                        className='w-12 h-12 hover:cursor-pointer'
                        onClick={() => router.push(`${data[0]}`)}
                    />
                    <a
                        className='break-all h-12 overflow-hidden'
                        href={`${data[0]}`}
                    >
                        {data[0]}
                    </a>
                </div>
                {data[1]}
            </div>
        );
    };
    return (
        <div className='flex flex-col'>
            {datas.map((data: Props, idx: number) => {
                const items = data.schedule.length;
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
                            {data.schedule.map(
                                (schedule: [string, string], idx: number) => (
                                    <Links
                                        key={`${data.date}schedule${idx}`}
                                        data={schedule}
                                    />
                                )
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
