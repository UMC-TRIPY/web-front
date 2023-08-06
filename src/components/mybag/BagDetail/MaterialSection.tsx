import React, { useState } from 'react';

interface IMaterial {
    id: string;
    name: string;
    clicked: boolean;
}

const MaterialSection = ({
    recommendMaterials,
    handleClickRecoMaterial
}: {
    recommendMaterials: IMaterial[];
    handleClickRecoMaterial: any;
}) => {
    return (
        <div className='h-2/6 bg-brightgrey'>
            <div className='flex items-center h-2/5 text-2xl font-bold pl-8'>
                여행지별 추천 준비물
            </div>
            <div className='flex flex-wrap gap-4 w-[90%] m-auto'>
                {recommendMaterials.map((material, idx) => (
                    <div
                        key={idx}
                        className='flex justify-center items-center w-fit h-8 p-4 bg-lightgrey rounded-full hover:bg-main-color cursor-pointer'
                        onClick={() => handleClickRecoMaterial(material.id)}
                    >
                        {material.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MaterialSection;
