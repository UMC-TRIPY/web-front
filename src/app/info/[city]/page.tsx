'use client';

import InfoMenus from '@/components/infomenu/InfoMenus';
import InfoCity from '@/components/infocity/InfoCity';
import Community from '@/components/community/Community';
import Conversation from '@/components/conversation/Conversation';
import HotPlace from '@/components/hotplace/HotPlace';
import CardCarousel from '@/components/main/CardCarousel';
import { useParams } from 'next/navigation';

const items = [
    {
        title: '110V 멀티어댑터',
        desc: '일본은 110V를 사용해요.',
        img: '/images/prep1.png'
    },
    {
        title: '동전지갑',
        desc: '현금과 동전을 많이 쓰기 때문에 동전지갑이 편해요.',
        img: '/images/prep2.png'
    },
    {
        title: '도쿄 서브웨이 티켓',
        desc: '도쿄에서 시간별로 나눠 지하철 13개 노선의 250여 개 정류장을 사용해요.',
        img: '/images/prep3.png'
    },
    {
        title: '유니버셜 티켓',
        desc: '재밌게 놀아봐용.',
        img: '/images/prep3.png'
    },
    {
        title: '도톤보리',
        desc: '거리 이쁨.',
        img: '/images/prep1.png'
    },
    {
        title: '아사히',
        desc: '맥주 존맛.',
        img: '/images/prep2.png'
    },
    {
        title: '삿포로',
        desc: '눈이 예뻐여.',
        img: '/images/prep2.png'
    },
    {
        title: '오키나와',
        desc: '오키! 나와.',
        img: '/images/prep3.png'
    },
    {
        title: '나고야',
        desc: '사슴 공원.',
        img: '/images/prep1.png'
    }
];

const Page = () => {
    const datas = require('../../../../public/data/dummy.json');
    const para = useParams();
    const cityName: any = datas.datas.filter((data: any) => {
        const cityName = data.cityEn;
        return cityName.toLowerCase().replace(/ /g, '') === para.city;
    })[0];
    const dummyCity =
        cityName === undefined
            ? undefined
            : cityName.location.map((loc: any) => {
                  return { title: loc.name, desc: loc.reviews, img: loc.image };
              });
    return (
        <div>
            {cityName === undefined ? (
                <div>해당페이지가 없습니다.</div>
            ) : (
                <>
                    {/* 화면 위치 및 검색 기능 부분 */}
                    <InfoMenus />
                    {/* 여행 도시 관한 정보 부분 */}
                    <InfoCity city={cityName} />
                    {/* 인기 여행지 */}
                    <HotPlace city={cityName.location} zoom={cityName.zoom} />
                    <div className='my-16'>
                        <CardCarousel
                            mode={0}
                            title=''
                            size={4}
                            items={dummyCity}
                        />
                    </div>
                    {/* 추천 준비물 */}
                    {/* <RecoPrep /> */}
                    <div className='my-16'>
                        <CardCarousel
                            mode={1}
                            title='추천 준비물'
                            size={3}
                            items={items}
                        />
                    </div>
                    <Community />
                    <Conversation />
                </>
            )}
        </div>
    );
};

export default Page;