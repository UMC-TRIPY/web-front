'use client';

import {
    addMaterial,
    getCityMateriallList,
    getTravelBagMaterialList
} from '@/apis/bag';
import { getMaterials } from '@/apis/material';
import CarrierSection from '@/components/mybag/BagDetail/CarrierSection';
import MaterialSection from '@/components/mybag/BagDetail/MaterialSection';
import MemoSection from '@/components/mybag/BagDetail/MemoSection';
import WeatherSection from '@/components/mybag/BagDetail/WeatherSection';
import { bagIDState } from '@/states/schedule';
import { IRecoMaterial } from '@/types/bag';
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
    const { bag_id } = useParams();

    const [bagID, setBagID] = useRecoilState(bagIDState);
    const [materials, setMaterials] = useState<IMaterialProps[]>([]);
    const [recommendMaterials, setRecommendMaterials] = useState<
        IRecoMaterial[]
    >([]);

    useEffect(() => {
        const place = sessionStorage.getItem('place');
        if (place) {
            getCityMateriallList(place).then((data) => {
                setRecommendMaterials(data);
            });
        }
    }, []);

    useEffect(() => {
        console.log('bag_id:', bag_id);
        if (bag_id !== undefined) {
            console.log('bagID:', bag_id);
            const id = parseInt(bag_id);
            setBagID(id);
            getTravelBagMaterialList(id).then((res: IMaterial[]) => {
                setMaterials(
                    res.map((data) => {
                        return { ...data, edited: false };
                    })
                );
            });
        }
    }, [bag_id, setBagID]);

    const handleClickRecoMaterial = async (id: number) => {
        const MATERIAL_LENGTH = materials.length;
        const restRecoMaterial = recommendMaterials.filter(
            (material) => material.materials_index !== id
        );
        const clickedMaterial = recommendMaterials.filter(
            (material) => material.materials_index === id
        );
        await addMaterial(bagID, clickedMaterial[0].materials_name);
        const newMaterial = {
            materials_index: -1,
            materials_name: clickedMaterial[0].materials_name,
            check_box: false,
            edited: false
        };

        setRecommendMaterials(restRecoMaterial);
        setMaterials([newMaterial, ...materials]);
    };

    return (
        <div className='h-screen'>
            <div
                className='flex items-center h-16 text-xl text-dark-black cursor-pointer w-fit'
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
