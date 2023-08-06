'use client';

import CarrierSection from '@/components/mybag/BagDetail/CarrierSection';
import MaterialSection from '@/components/mybag/BagDetail/MaterialSection';
import MemoSection from '@/components/mybag/BagDetail/MemoSection';
import WeatherSection from '@/components/mybag/BagDetail/WeatherSection';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface IMaterial {
    id: string;
    name: string;
    clicked: boolean;
}

const BagDetail = () => {
    const route = useRouter();
    const [materials, setMaterials] = useState([
        { id: '0', name: '비치웨어', clicked: false },
        { id: '1', name: '자외선 차단제', clicked: false },
        { id: '2', name: '양산', clicked: false },
        { id: '3', name: '슬리퍼', clicked: false },
        { id: '4', name: '여권', clicked: false },
        { id: '5', name: '선글라스', clicked: false },
        { id: '6', name: '미니 선풍기', clicked: false },
        { id: '7', name: '우산', clicked: false },
        { id: '8', name: '우비', clicked: false },
        { id: '9', name: '부채', clicked: false },
        { id: '10', name: '여행용 방수팩', clicked: false },
        { id: '11', name: '수영 모자', clicked: false },
        { id: '12', name: '모기약', clicked: false }
    ]);

    const [recommendMaterials, setRecommendMaterials] = useState<IMaterial[]>([
        { id: '0', name: '비치웨어', clicked: false },
        { id: '1', name: '자외선 차단제', clicked: false },
        { id: '2', name: '양산', clicked: false },
        { id: '3', name: '슬리퍼', clicked: false },
        { id: '4', name: '여권', clicked: false },
        { id: '5', name: '선글라스', clicked: false },
        { id: '6', name: '미니 선풍기', clicked: false },
        { id: '7', name: '우산', clicked: false },
        { id: '8', name: '우비', clicked: false },
        { id: '9', name: '부채', clicked: false },
        { id: '10', name: '여행용 방수팩', clicked: false },
        { id: '11', name: '수영 모자', clicked: false },
        { id: '12', name: '모기약', clicked: false }
    ]);

    const handleClickRecoMaterial = (id: string) => {
        const MATERIAL_LENGTH = materials.length.toString();
        const restRecoMaterial = recommendMaterials.filter(
            (material) => material.id !== id
        );
        const clickedMaterial = recommendMaterials.filter(
            (material) => material.id === id
        );
        clickedMaterial[0].id = MATERIAL_LENGTH;

        setRecommendMaterials(restRecoMaterial);
        setMaterials([...clickedMaterial, ...materials]);
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
