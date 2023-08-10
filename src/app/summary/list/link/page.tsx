'use client';
import HelpBot from '@/components/mybag/HelpBot';
import CommonHeader from '@/components/summary/CommonHeader';
import LinkLists from '@/components/summary/LinkLists';

const datas: any = [
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

export default function Page() {
    return (
        <div>
            <HelpBot width='w-[1380px]' />
            <CommonHeader path='링크' />
            <div className='text-3xl font-bold mt-12 mb-5'>내 링크 목록</div>
            <LinkLists datas={datas} />
        </div>
    );
}
