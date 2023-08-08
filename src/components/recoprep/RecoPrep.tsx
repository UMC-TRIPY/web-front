import { use, useEffect, useState } from 'react';

export default function RecoPrep() {
    const items = [
        [
            ['110V 멀티어댑터', '일본은 110V를 사용해요.', '/images/prep1.png'],
            [
                '동전지갑',
                '현금과 동전을 많이 쓰기 때문에 동전지갑이 편해요.',
                '/images/prep2.png'
            ],
            [
                '도쿄 서브웨이 티켓',
                '도쿄에서 시간별로 나눠 지하철 13개 노선의 250여 개 정류장을 사용해요.',
                '/images/prep3.png'
            ]
        ],
        [
            ['유니버셜 티켓', '재밌게 놀아봐용.', '/images/prep3.png'],
            ['도톤보리', '거리 이쁨.', '/images/prep1.png'],
            ['아사이', '맥주 존맛.', '/images/prep2.png']
        ],
        [
            ['삿포로', '눈이 예뻐여.', '/images/prep2.png'],
            ['오키나와', '오키! 나와.', '/images/prep3.png'],
            ['나고야', '사슴 공원.', '/images/prep1.png']
        ]
    ];
    const itemLen = items.length;
    const [add, setAdd] = useState<string[]>([]);
    const [num, setNum] = useState<number>(0);
    let views = items[num];

    useEffect(() => {
        console.log(add);
    }, [add]);

    useEffect(() => {
        console.log(num);
    }, [num]);

    const onClick = (prep: string) => {
        const adding = [...add, prep];
        setAdd(adding);
        alert(`${prep} 가방에 담기 성공!`);
    };
    const decrease = () => {
        setNum((num) => (num === 0 ? itemLen - 1 : num - 1));
    };
    const increase = () => {
        setNum((num) => (num === itemLen - 1 ? 0 : num + 1));
    };
    const Preparation = ({
        prep,
        usage,
        src
    }: {
        prep: string;
        usage: string;
        src: string;
    }) => {
        return (
            <div className='flex mr-5'>
                <div className='p-4 bg-brightgrey w-box-width h-box-height rounded-lg'>
                    <p className='text-2xl font-bold mb-2'>{prep}</p>
                    <p>{usage}</p>
                    <div className='flex justify-center mt-4'>
                        <img src={src} alt='none' />
                    </div>
                </div>
                <button
                    className='self-end absolute bg-lightgrey py-2 px-4 rounded-3xl ml-72 mb-4'
                    type='button'
                    onClick={() => onClick(prep)}
                >
                    가방에 담기
                </button>
            </div>
        );
    };
    return (
        <div className='my-16'>
            <div className='flex justify-between'>
                <span className='text-3xl font-bold'>추천 준비물</span>
                <div className='flex'>
                    <img
                        src='/images/arrow.png'
                        alt='none'
                        className='rotate-180 hover:cursor-pointer'
                        onClick={decrease}
                    />
                    <img
                        src='/images/arrow.png'
                        alt='none'
                        className='hover:cursor-pointer'
                        onClick={increase}
                    />
                </div>
            </div>
            <div className='mt-8 flex overflow-x-hidden'>
                {views.map((item: string[], index: number) => {
                    return (
                        <Preparation
                            key={`prep${index}`}
                            prep={item[0]}
                            usage={item[1]}
                            src={item[2]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
