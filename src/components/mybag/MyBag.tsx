import ListComp from './ListComp';

export default function MyBag() {
    const travels_1 = [
        { id: 1, dates: '2023.06.30~2023.07.02 (2박 3일)', places: '부산' },
        {
            id: 2,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '바르셀로나, 세비야'
        },
        {
            id: 3,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '파리, 런던'
        },
        {
            id: 4,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '오사카, 나라, 교토'
        },
        { id: 5, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '방콕' },
        {
            id: 6,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '싱가폴, 말레이시아'
        },
        { id: 7, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '제주도' },
        { id: 8, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '도쿄' },
        { id: 9, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '어디어디' },
        { id: 10, dates: '언제언제', places: '어디어디' },
        { id: 11, dates: '언제언제', places: '어디어디' },
        { id: 12, dates: '언제언제', places: '어디어디' },
        { id: 13, dates: '언제언제', places: '어디어디' }
    ];
    const travels_2 = [
        { id: 1, dates: '2023.06.30~2023.07.02 (2박 3일)', places: '여수' },
        {
            id: 2,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '레알 마드리드'
        },
        {
            id: 3,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '파리, 런던'
        },
        {
            id: 4,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '도쿄'
        },
        { id: 5, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '홍콩' },
        {
            id: 6,
            dates: '2023.05.09~2023.05.11 (2박 3일)',
            places: '쿠알라룸푸르'
        },
        { id: 7, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '제주도' },
        { id: 8, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '도쿄' },
        { id: 9, dates: '2023.05.09~2023.05.11 (2박 3일)', places: '어디어디' },
        { id: 10, dates: '언제언제', places: '어디어디' },
        { id: 11, dates: '언제언제', places: '어디어디' },
        { id: 12, dates: '언제언제', places: '어디어디' },
        { id: 13, dates: '언제언제', places: '어디어디' }
    ];

    return (
        <div className='flex flex-col items-center'>
            <div className='font-bold text-5xl mt-20 mb-24'>
                여행 가방을 등록해볼까요?
            </div>
            <div className='absolute bottom-[200px] flex justify-end w-[1480px]'>
                <img
                    className='fixed hover:cursor-pointer'
                    src='/images/helpbot.png'
                    alt='none'
                />
            </div>
            <ListComp name='여행' travels={travels_1} />
            <ListComp name='가방' travels={travels_2} />
        </div>
    );
}
