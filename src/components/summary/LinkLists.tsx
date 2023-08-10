import { useRouter } from 'next/navigation';

export default function LinkLists({ datas }: { datas: any }) {
    const getFaviconUrl = (url: string) => {
        // Google Favicon 서비스를 사용하여 favicon URL 생성
        return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
    };
    const router = useRouter();
    const Links = ({ data }: { data: any }) => {
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
            {datas.map((data: any, idx: number) => {
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
                            {data.schedule.map((schedule: any, idx: number) => (
                                <Links
                                    key={`${data.date}schedule${idx}`}
                                    data={schedule}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
