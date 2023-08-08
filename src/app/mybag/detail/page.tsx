'use client';

import { getMaterials } from '@/apis/material';
import CarrierSection from '@/components/mybag/BagDetail/CarrierSection';
import MaterialSection from '@/components/mybag/BagDetail/MaterialSection';
import MemoSection from '@/components/mybag/BagDetail/MemoSection';
import WeatherSection from '@/components/mybag/BagDetail/WeatherSection';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface IMaterial {
    materials_index: number;
    materials_name: string;
}

interface IMaterialProps extends IMaterial {
    checked: boolean;
    edited: boolean;
}

const BagDetail = () => {
    const route = useRouter();
    // const [materials, setMaterials] = useState([
    //     { id: '0', name: '비치웨어', checked: false, edited: false },
    //     { id: '1', name: '자외선 차단제', checked: false, edited: false },
    //     { id: '2', name: '양산', checked: false, edited: false },
    //     { id: '3', name: '슬리퍼', checked: false, edited: false },
    //     { id: '4', name: '여권', checked: false, edited: false },
    //     { id: '5', name: '선글라스', checked: false, edited: false },
    //     { id: '6', name: '미니 선풍기', checked: false, edited: false },
    //     { id: '7', name: '우산', checked: false, edited: false },
    //     { id: '8', name: '우비', checked: false, edited: false },
    //     { id: '9', name: '부채', checked: false, edited: false },
    //     { id: '10', name: '여행용 방수팩', checked: false, edited: false },
    //     { id: '11', name: '수영 모자', checked: false, edited: false },
    //     { id: '12', name: '모기약', checked: false, edited: false }
    // ]);
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
        getMaterials().then((res: IMaterial[]) => {
            setMaterials(
                res.map((data) => {
                    return { ...data, checked: false, edited: false };
                })
            );
        });
    }, []);

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
            checked: false,
            edited: false
        };

        setRecommendMaterials(restRecoMaterial);
        setMaterials([newMaterial, ...materials]);
    };

    return (
        <div className='h-screen'>
            <div
                className='flex items-center h-16 text-xl text-dark-black cursor-pointer'
                onClick={() => route.push('/mybag/new')}
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
