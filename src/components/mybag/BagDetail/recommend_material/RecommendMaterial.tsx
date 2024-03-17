'use client';
import React, { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

import { Material } from '@/types/bag';
import RoundedButton from '@/components/common/button/RoundedButton';

interface RecommendMaterialProps {
    recommendMaterials: Material[];
    handleClickMaterial: (name: string) => void;
}

export default function RecommendMaterial({
    recommendMaterials,
    handleClickMaterial
}: RecommendMaterialProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMaterialList = () => setIsOpen((prev) => !prev);
    return (
        <div className='p-5 bg-brightgrey rounded-lg'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>여행지별 추천 준비물</h1>
                <button onClick={handleOpenMaterialList}>
                    <IoIosArrowDown
                        size={20}
                        className={`transition-all ${isOpen && 'rotate-180'}`}
                    />
                </button>
            </div>
            <div
                className={`transition-all flex flex-wrap gap-2 mt-3 text-xs text-dark-black overflow-hidden ${
                    isOpen ? 'h-[72px]' : 'h-0'
                }`}
            >
                {recommendMaterials.map((material) => (
                    <RoundedButton
                        key={material.material_index}
                        onClick={() =>
                            handleClickMaterial(material.material_name)
                        }
                    >
                        {material.material_name}
                    </RoundedButton>
                ))}
            </div>
        </div>
    );
}
