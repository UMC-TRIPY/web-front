'use client';
import React, { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

import { RecommendMaterial } from '@/types/bag';

const MaterialSection = ({
    recommendMaterials,
    handleClickMaterial
}: {
    recommendMaterials: RecommendMaterial[];
    handleClickMaterial: (id: number) => void;
}) => {
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
                    <button
                        key={material.material_name}
                        className='bg-lightgrey py-2 px-3 rounded-full hover:bg-main-color max-h-8'
                        onClick={() =>
                            handleClickMaterial(material.material_index)
                        }
                    >
                        {material.material_name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MaterialSection;
