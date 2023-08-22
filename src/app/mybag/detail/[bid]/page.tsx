'use client';

import { getTravelBagMaterialList } from '@/apis/bag';
import { getMaterials } from '@/apis/material';
import CarrierSection from '@/components/mybag/BagDetail/CarrierSection';
import MaterialSection from '@/components/mybag/BagDetail/MaterialSection';
import MemoSection from '@/components/mybag/BagDetail/MemoSection';
import WeatherSection from '@/components/mybag/BagDetail/WeatherSection';
import { bagIDState } from '@/states/schedule';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

interface IMaterial {
    materials_index: number;
    materials_name: string;
    check_box: boolean;
}

interface IMaterialProps extends IMaterial {
    edited: boolean;
}

const BagDetail = () => {
    const router = useRouter();
    const params = useParams();

    const [bagID, setBagID] = useRecoilState(bagIDState);
    const [materials, setMaterials] = useState<IMaterialProps[]>([]);

    const [recommendMaterials, setRecommendMaterials] = useState([
        { id: '0', name: '비치웨어' },
        { id: '1', name: '자외선 차단제' },
        { id: '2', name: '양산' },
        { id: '3', name: '슬리퍼' },
        { id: '4', name: '여권' },
        { id: '5', name: '선글라스' },
        { id: '6', name: '미니 선풍기' },
        { id: '7', name: '우산' },
        { id: '8', name: '우비' },
        { id: '9', name: '부채' },
        { id: '10', name: '여행용 방수팩' },
        { id: '11', name: '수영 모자' },
        { id: '12', name: '모기약' }
    ]);

    useEffect(() => {
        if (params.bid) setBagID(parseInt(params.bid));
    }, [setBagID, params]);

    useEffect(() => {
        getTravelBagMaterialList(bagID).then((res: IMaterial[]) => {
            setMaterials(
                res.map((data) => {
                    return { ...data, edited: false };
                })
            );
        });
    }, [bagID]);

    const handleClickRecoMaterial = (id: string) => {
        const MATERIAL_LENGTH = materials.length;
        const restRecoMaterial = recommendMaterials.filter(
            (material) => material.id !== id
        );
        const clickedMaterial = recommendMaterials.filter(
            (material) => material.id === id
        );

        const newMaterial = {
            materials_index: MATERIAL_LENGTH,
            materials_name: clickedMaterial[0].name,
            check_box: false,
            edited: false
        };

        setRecommendMaterials(restRecoMaterial);
        setMaterials([newMaterial, ...materials]);
    };

    return (
        <div className='h-screen'>
            <div
                className='flex items-center h-16 text-xl text-dark-black cursor-pointer'
                onClick={() => router.push('/mybag/new')}
            >
                {'<'} 가방 목록 보기
            </div>

            <div className='flex gap-4 h-full'>
                <div className='flex flex-col gap-4 h-full w-1/2'>
                    <WeatherSection />
                    <MaterialSection
                        recommendMaterials={recommendMaterials}
                        handleClickRecoMaterial={handleClickRecoMaterial}
                    />
                    <MemoSection />
                </div>
                <div className='w-1/2'>
                    <CarrierSection
                        materials={materials}
                        setMaterials={setMaterials}
                    />
                </div>
            </div>
        </div>
    );
};

export default BagDetail;
