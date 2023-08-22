import { useEffect } from 'react';
import Portal from './Portal';
import Link from 'next/link';

export default function FixedSearchCityModal({
    setIsModal,
    results
}: {
    setIsModal: any;
    results: [string, string][];
}) {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    });
    return (
        <div
            className={`absolute rounded-lg max-h-56 bg-white z-101 shadow-md top-20 w-[inherit] ${
                results.length > 4 ? 'overflow-y-scroll' : 'overflow-y-hidden'
            }`}
        >
            <Portal selector='#body'>
                <div
                    className='absolute top-0 left-0 w-screen h-screen'
                    onClick={() => setIsModal(false)}
                ></div>
            </Portal>
            {results.map((result: [string, string], idx: number) => (
                <Link key={`resultlink${idx}`} href={`/info/${result[1]}`}>
                    <div
                        key={`result${idx}`}
                        className='py-4 pl-8 border-y border-morelightgrey cursor-pointer'
                    >
                        {result[0]}
                    </div>
                </Link>
            ))}
        </div>
    );
}
