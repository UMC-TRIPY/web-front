'use client';
import { MaterialProps } from '@/app/mybag/detail/[bag_id]/page';
import RoundedButton from '@/components/common/button/RoundedButton';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

interface AddItemProps {
    isEditing: boolean;
    name: string;
}

interface ICarrierProps {
    materials: MaterialProps[];
    setMaterials: React.Dispatch<React.SetStateAction<MaterialProps[]>>;
}

const CarrierSection = ({ materials, setMaterials }: ICarrierProps) => {
    const [addItem, setAddItem] = useState<AddItemProps>({
        isEditing: false,
        name: ''
    });

    const handleStartEditing = () => setAddItem({ isEditing: true, name: '' });

    const handleStopEditing = () => setAddItem({ isEditing: false, name: '' });

    const handleAddItem = () => {
        handleStopEditing();
        setMaterials([
            ...materials,
            { id: materials.length + 1, name: addItem.name, isChecked: false }
        ]);
    };

    const handleCheckMaterial = (material: MaterialProps) => {
        const newMaterials = [...materials];
        const indexOfMaterial = newMaterials.indexOf(material);
        newMaterials[indexOfMaterial].isChecked =
            !newMaterials[indexOfMaterial].isChecked;
        setMaterials(newMaterials);
    };

    const handleChangeAddItem = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddItem({ isEditing: true, name: e.target.value });
    return (
        <>
            <div className='flex flex-col items-center'>
                <Image
                    src='/images/carrierHandle.svg'
                    alt='캐리어 손잡이'
                    width={226}
                    height={64}
                    priority={true}
                />
                <span className='absolute text-white text-xl pt-1'>캐리어</span>
                <div className='flex gap-40'>
                    <div className='w-7 h-12 bg-lightgrey' />
                    <div className='w-7 h-12 bg-lightgrey' />
                </div>
            </div>
            <div className='flex flex-col p-3 bg-brightgrey h-full'>
                <div className='flex gap-2 justify-end mb-2'>
                    {addItem.isEditing ? (
                        <>
                            <RoundedButton onClick={handleAddItem} smallLabel>
                                완료
                            </RoundedButton>
                            <RoundedButton
                                onClick={handleStopEditing}
                                smallLabel
                            >
                                취소
                            </RoundedButton>
                        </>
                    ) : (
                        <RoundedButton onClick={handleStartEditing} smallLabel>
                            추가하기
                        </RoundedButton>
                    )}
                </div>
                {materials.length > 0 &&
                    materials.map((material) => (
                        <div className='border border-black' key={material.id}>
                            <input
                                type='checkbox'
                                onChange={() => handleCheckMaterial(material)}
                                checked={material.isChecked}
                            />
                            <span className='text-xs text-dark-black'>
                                {material.name}
                            </span>
                        </div>
                    ))}
                {addItem.isEditing && (
                    <input
                        type='text'
                        value={addItem.name}
                        onChange={handleChangeAddItem}
                        className='outline-dark-black py-2 px-4 text-xs text-dark-black rounded-full'
                    />
                )}
            </div>
        </>
    );
};

export default CarrierSection;
