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
}

interface LocationProps {
    name: string;
    lat: string;
    lng: string;
}

interface MaterialProps {
    name: string;
    desc: string;
}

// DB에 있는 도시 오사카 1 , 도쿄 2, 런던 7, 바르셀로나 9, 시드니 18
// 준비물 있는 나라  일본 3 - [1,2] , 영국 9 - [7], 스페인 10 - [9], 호주 11 - [18]

const Page = () => {
    const datas = require('../../../../public/data/dummy.json');
    const travels = datas.travels;
    const para = useParams();
    const cityName: CityProps = datas.datas.filter((data: CityProps) => {
        const enName = data.cityEn;
        return enName.toLowerCase().replace(/ /g, '') === para.city;
    })[0];
    const [exist, setExist] = useState<boolean>(false);
    const [city, setCity] = useState<LocationProps[] | undefined>();
    const [materials, setMaterials] = useState<MaterialProps[] | undefined>();
    const [hotPlaceImgs, setHotPlaceImgs] = useState<string[] | undefined>();
    const [materialImgs, setMaterialImgs] = useState<string[] | undefined>();
    useEffect(() => {
        const cityIdx = datas.travels.filter(
            (t: [string, string, string]) => t[1] === para.city
        )[0][2];
        const countryIdx = datas.travels.filter(
            (t: [string, string, string]) => t[1] === para.city
        )[0][3];
        console.log(cityIdx);

        switch (cityIdx) {
            case 1: {
                setHotPlaceImgs([
                    '/images/universalStudio.png',
                    '/images/osakajo.jpg',
                    '/images/dotonbori.jpg',
                    '/images/universalStudio.png'
                ]);
                break;
            }
            case 2: {
                setHotPlaceImgs([
                    '/images/disneylandtokyo.jpg',
                    '/images/sensoji.jpg',
                    '/images/disneylandtokyo.jpg',
                    '/images/sensoji.jpg'
                ]);
                break;
            }
            case 7: {
                setHotPlaceImgs([
                    '/images/londoneye.jpg',
                    '/images/towerbridge.jpg',
                    '/images/buckingham.jpg',
                    '/images/bigben.jpg'
                ]);
                break;
            }
            case 9: {
                setHotPlaceImgs([
                    '/images/sagradafamilia.jpg',
                    '/images/gaudi.jpg',
                    '/images/sagradafamilia.jpg',
                    '/images/gaudi.jpg'
                ]);
                break;
            }
            case 18: {
                setHotPlaceImgs([
                    '/images/operahouse.jpg',
                    '/images/operahouse.jpg',
                    '/images/darlinghabour.jpg',
                    '/images/darlinghabour.jpg'
                ]);
                break;
            }
        }

        switch (countryIdx) {
            case 3: {
                setMaterialImgs([
                    '/images/prep1.png',
                    '/images/prep2.png',
                    '/images/prep3.png',
                    '/images/prep3.png'
                ]);
                break;
            }
            case 9: {
                setMaterialImgs([
                    '/images/prep1.png',
                    '/images/prep2.png',
                    '/images/prep3.png'
                ]);
                break;
            }
            case 10: {
                setMaterialImgs([
                    '/images/prep1.png',
                    '/images/prep2.png',
                    '/images/prep3.png'
                ]);
                break;
            }
            case 11: {
                setMaterialImgs([
                    '/images/prep1.png',
                    '/images/prep2.png',
                    '/images/prep3.png',
                    '/images/prep3.png'
                ]);
                break;
            }
        }

        checkCity(cityIdx)
            .then((res) => {
                let tmp: LocationProps[] = [];
                res.map(
                    (
                        r: {
                            latitude: string;
                            longitude: string;
                            landmark_name: string;
                        },
                        idx: number
                    ) => {
                        tmp.push({
                            lat: r.latitude,
                            lng: r.longitude,
                            name: r.landmark_name
                        });
                    }
                );
                if (tmp.length !== 0) {
                    setExist(true);
                }
                setCity(tmp);
            })
            .catch((err) => console.log(err));

        checkMaeterial(countryIdx)
            .then((res) => {
                let tmp: MaterialProps[] = [];
                res.data.map(
                    (
                        r: {
                            materials_name: string;
                            material_description: string;
                        },
                        idx: number
                    ) => {
                        tmp.push({
                            name: r.materials_name,
                            desc: r.material_description
                        });
                    }
                );
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
                    <Places city={city} hotPlaceImgs={hotPlaceImgs} />
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
