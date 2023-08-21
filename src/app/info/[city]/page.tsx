'use client';

import InfoMenus from '@/components/infomenu/InfoMenus';
import InfoCity from '@/components/infocity/InfoCity';
import Community from '@/components/community/Community';
import Conversation from '@/components/conversation/Conversation';
import HotPlace from '@/components/hotplace/HotPlace';
import CardCarousel from '@/components/main/CardCarousel';
import { useParams } from 'next/navigation';
import Places from '@/components/hotplace/Places';
import { useEffect, useState } from 'react';
import { checkCity, checkMaeterial } from '@/apis/infocity/check';
import RecoPrep from '@/components/recoprep/RecoPrep';

interface CityProps {
    country: string;
    cityKo: string;
    cityEn: string;
    currencyKo: string;
    currencyEn: string;
    mainPhoto: string;
    zoom: number;
    location: [
        {
            name: string;
            reviews: string;
            lat: string;
            lng: string;
            image: string;
        }
    ];
}

interface LocationProps {
    name: string;
    reviews: string;
    lat: string;
    lng: string;
    image: string;
}
// DB에 있는 도시 오사카 1 , 도쿄 2, 런던 7, 바라ㅡ셀로나 9, 시드니 18
// 준비물 있는 나라  일본 3 - [1,2] , 영국 9 - [7], 스페인 10 - [9], 호주 11 - [18]

const Page = () => {
    const datas = require('../../../../public/data/dummy.json');
    const travels = datas.travels;
    const para = useParams();
    const cityName: CityProps = datas.datas.filter((data: CityProps) => {
        const cityName = data.cityEn;
        return cityName.toLowerCase().replace(/ /g, '') === para.city;
    })[0];
    const [exist, setExist] = useState<boolean>(false);
    const [city, setCity] = useState<any>();
    const [materials, setMaterials] = useState<any>();
    useEffect(() => {
        const cityIdx = datas.travels.filter(
            (t: [string, string, string]) => t[1] === para.city
        )[0][2];
        const countryIdx = datas.travels.filter(
            (t: [string, string, string]) => t[1] === para.city
        )[0][3];

        checkCity(cityIdx)
            .then((res) => {
                let tmp: any[] = [];
                res.map((r: any, idx: number) => {
                    tmp.push({
                        lat: r.latitude,
                        lng: r.longitude,
                        name: r.landmark_name
                    });
                });
                if (tmp.length !== 0) {
                    setExist(true);
                }
                setCity(tmp);
            })
            .catch((err) => console.log(err));

        checkMaeterial(countryIdx)
            .then((res) => {
                let tmp: any[] = [];
                res.data.map((r: any, idx: number) => {
                    tmp.push({
                        name: r.materials_name,
                        desc: r.material_description
                    });
                });
                setMaterials(tmp);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            {!exist ? (
                <div>해당페이지가 없습니다.</div>
            ) : (
                <>
                    {/* 화면 위치 및 검색 기능 부분 */}
                    <InfoMenus travels={travels} />
                    {/* 여행 도시 관한 정보 부분 */}
                    <InfoCity city={cityName} />
                    {/* 인기 여행지, 연동 완료 */}
                    <HotPlace city={city} />
                    <Places city={city} />
                    {/* 추천 준비물, 연동 완료 */}
                    <RecoPrep materials={materials} />
                    <Community cityName={cityName.cityKo} />
                    <Conversation />
                </>
            )}
        </div>
    );
};

export default Page;
