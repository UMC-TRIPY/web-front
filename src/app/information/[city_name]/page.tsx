'use client';

import MenuBar from '@/components/information/menu/MenuBar';
import City from '@/components/information/city/City';
import Community from '@/components/community/Community';
import Conversation from '@/components/conversation/Conversation';
import HotPlace from '@/components/hotplace/HotPlace';
import CardCarousel from '@/components/main/CardCarousel';
import { useParams } from 'next/navigation';
import Places from '@/components/hotplace/Places';
import { useEffect, useState } from 'react';
import {
    checkCity,
    checkCurrency,
    checkMaeterial
} from '@/apis/infocity/check';
import RecoPrep from '@/components/recoprep/RecoPrep';

interface CityProps {
    country: string;
    cityKo: string;
    cityEn: string;
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
    img: string;
}

interface CurrencyProps {
    currencyKo: string;
    currencyEn: string;
}

// DB에 있는 도시 오사카 1 , 도쿄 2, 런던 7, 바르셀로나 9, 시드니 18
// 준비물 있는 나라  일본 3 - [1,2] , 영국 9 - [7], 스페인 10 - [9], 호주 11 - [18]

const Page = () => {
    const datas = require('../../../../public/data/dummy.json');
    const travels = datas.travels;
    const para = useParams();
    const cityName: CityProps = datas.datas.filter((data: CityProps) => {
        const enName = data.cityEn;
        return enName.toLowerCase().replace(/ /g, '') === para.city_name;
    })[0];
    const [exist, setExist] = useState<boolean>(false);
    const [currency, setCurrency] = useState<CurrencyProps | undefined>();
    const [cur, setCur] = useState<number>(0);
    const [city, setCity] = useState<LocationProps[] | undefined>();
    const [materials, setMaterials] = useState<MaterialProps[] | undefined>();
    const [hotPlaceImgs, setHotPlaceImgs] = useState<string[] | undefined>();
    const [materialImgs, setMaterialImgs] = useState<string[] | undefined>();
    useEffect(() => {
        const cityIdx = datas.travels.filter(
            (t: [string, string, string]) => t[1] === para.city_name
        )[0][2];
        const countryIdx = datas.travels.filter(
            (t: [string, string, string]) => t[1] === para.city_name
        )[0][3];
        console.log(cityIdx);

        switch (cityIdx) {
            case 1: {
                setHotPlaceImgs([
                    '/images/universalStudio.png',
                    '/images/osakajo.jpg',
                    '/images/dotonbori.jpg',
                    '/images/aquariumkaiyukan.JPEG'
                ]);
                break;
            }
            case 2: {
                setHotPlaceImgs([
                    '/images/tokyoskytree.jpg',
                    '/images/tokyotower.jpg',
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
                    '/images/familia.jpg',
                    '/images/gaudi.jpg',
                    '/images/catalunyasquare.jpg',
                    '/images/casabat.jpg'
                ]);
                break;
            }
            case 18: {
                setHotPlaceImgs([
                    '/images/operahouse.jpg',
                    '/images/harbourbridge.jpg',
                    '/images/darlinghabour.jpg',
                    '/images/botanicgardens.jpg'
                ]);
                break;
            }
        }
        switch (countryIdx) {
            case 3: {
                setCur(0.11);
                break;
            }
            case 9: {
                setCur(0.0006);
                break;
            }
            case 10: {
                setCur(0.0007);
                break;
            }
            case 11: {
                setCur(0.0007);
                break;
            }
        }

        checkCurrency(countryIdx)
            .then((res) => setCurrency(res))
            .catch((err) => console.log(err));

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
                let tmp: any[] = [];
                let mat: any;

                switch (countryIdx) {
                    case 3: {
                        mat = [
                            '/images/multiadpater.png',
                            '/images/wallet.png',
                            '/images/railpass.png',
                            '/images/freevolt.png'
                        ];
                        break;
                    }
                    case 9: {
                        mat = [
                            '/images/multiadpater.png',
                            '/images/shower.png',
                            '/images/acc.png'
                        ];
                        break;
                    }
                    case 10: {
                        mat = [
                            '/images/suncream.png',
                            '/images/sunglasses.png',
                            '/images/acc.png'
                        ];
                        break;
                    }
                    case 11: {
                        mat = [
                            '/images/suncream.png',
                            '/images/sunglasses.png',
                            '/images/visa.png',
                            '/images/prep3.png'
                        ];
                        break;
                    }
                }
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
                            desc: r.material_description,
                            img: mat[idx]
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
                    <MenuBar travels={travels} />
                    {/* 여행 도시 관한 정보 부분 */}
                    <City city={cityName} currency={currency} cur={cur} />
                    {/* 인기 여행지, 연동 완료 */}
                    <HotPlace city={city} hotPlaceImgs={hotPlaceImgs} />
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
