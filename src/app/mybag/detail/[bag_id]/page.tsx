'use client';
import { IoIosArrowBack } from 'react-icons/io';

import Carrier from '@/components/mybag/BagDetail/carrier/Carrier';
import RecommendMaterial from '@/components/mybag/BagDetail/recommend_material/RecommendMaterial';
import Memo from '@/components/mybag/BagDetail/memo/Memo';
import Weather from '@/components/mybag/BagDetail/weather/Weather';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

export interface MaterialProps {
    id: number;
    name: string;
    isChecked: boolean;
}

const recommendMaterials = [
    { material_index: 10, material_name: '비치웨어' },
    { material_index: 11, material_name: '칫솔' },
    { material_index: 12, material_name: '양산' },
    { material_index: 13, material_name: '선글라스' },
    { material_index: 14, material_name: '미니 선풍기' },
    { material_index: 15, material_name: '우산' },
    { material_index: 16, material_name: '우비' },
    { material_index: 17, material_name: '부채' },
    { material_index: 18, material_name: '모자' },
    { material_index: 19, material_name: '슬리퍼' },
    { material_index: 20, material_name: '충전기' }
];

const BagDetail = () => {
    // bag_id를 이용하여 가방 API 요청하기
    const { bag_id } = useParams();

    const [materials, setMaterials] = useState<MaterialProps[]>([
        { id: 1, name: '준비물1', isChecked: false },
        { id: 2, name: '준비물2', isChecked: false },
        { id: 3, name: '준비물3', isChecked: false }
    ]);

    const handleClickMaterial = (name: string) => {
        const isMaterialExist = materials.find(
            (material) => material.name === name
        );
        if (!isMaterialExist) {
            setMaterials([
                { id: materials.length + 1, name, isChecked: false },
                ...materials
            ]);
        }
    };

    return (
        <>
            <Link
                href={'/mybag/add'}
                className='flex items-center gap-2 text-xl py-4'
            >
                <IoIosArrowBack size={24} />
                가방 목록 보기
            </Link>

            <div className='flex gap-5'>
                <div className='flex flex-col gap-3 flex-1'>
                    <Weather />
                    <RecommendMaterial
                        recommendMaterials={recommendMaterials}
                        handleClickMaterial={handleClickMaterial}
                    />
                    <Memo />
                </div>
                <div className='flex-1'>
                    <Carrier
                        materials={materials}
                        setMaterials={setMaterials}
                    />
                </div>
            </div>
        </>
    );
};

export default BagDetail;
