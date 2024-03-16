'use client';
import { MaterialProps } from '@/app/mybag/detail/[bag_id]/page';
import RoundedButton from '@/components/common/button/RoundedButton';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import CarrierMaterialInput from './CarrierMaterialInput';

interface AddItemProps {
    isEditing: boolean;
    name: string;
}

export interface EditItemProps {
    editContent: string;
    id: number;
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
    const [editItem, setEditItem] = useState<EditItemProps>({
        editContent: '',
        id: -1
    });

    const handleAddItem = () =>
        editItem.id !== -1
            ? handleChangeMaterial(editItem.id, 'content')
            : setAddItem({ isEditing: true, name: '' });

    const handleStopAddItem = () => setAddItem({ isEditing: false, name: '' });

    const handleStartEditItem = (material: MaterialProps) =>
        setEditItem({
            editContent: material.name,
            id: material.id
        });

    const handleStopEditItem = () => setEditItem({ editContent: '', id: -1 });

    const handleCompleteAddItem = () => {
        if (!addItem.name) {
            alert('1글자 이상 입력해 주세요.');
            return;
        }
        handleStopAddItem();
        setMaterials([
            { id: materials.length + 1, name: addItem.name, isChecked: false },
            ...materials
        ]);
    };

    const handleChangeMaterial = (id: number, mode: 'check' | 'content') => {
        const newMaterials = [...materials];
        const indexOfMaterial = newMaterials.findIndex(
            (material) => material.id === id
        );
        if (mode === 'check') {
            newMaterials[indexOfMaterial].isChecked =
                !newMaterials[indexOfMaterial].isChecked;
        } else {
            newMaterials[indexOfMaterial].name = editItem.editContent;
            handleStopEditItem();
        }
        setMaterials(newMaterials);
    };

    const handleChangeAddItem = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddItem({ isEditing: true, name: e.target.value });

    const handleChangeEditItem = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEditItem({ id: editItem.id, editContent: e.target.value });

    const handleClickEdit = useCallback(
        (material: MaterialProps) =>
            editItem.id === material.id
                ? handleStopEditItem()
                : handleStartEditItem(material),
        [editItem.id]
    );
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
                            <RoundedButton
                                onClick={handleCompleteAddItem}
                                smallLabel
                            >
                                완료
                            </RoundedButton>
                            <RoundedButton
                                onClick={handleStopAddItem}
                                smallLabel
                            >
                                취소
                            </RoundedButton>
                        </>
                    ) : (
                        <>
                            {editItem.id !== -1 && (
                                <RoundedButton
                                    onClick={handleStopEditItem}
                                    smallLabel
                                >
                                    취소
                                </RoundedButton>
                            )}
                            <RoundedButton onClick={handleAddItem} smallLabel>
                                {editItem.id !== -1 ? '입력완료' : '추가하기'}
                            </RoundedButton>
                        </>
                    )}
                </div>
                {addItem.isEditing && (
                    <div className='flex items-center bg-white py-3 px-4 max-w-max rounded-full mb-3 border border-brightgrey'>
                        <div className='w-5 h-5 rounded-full border border-grey flex items-center justify-center' />
                        <input
                            type='text'
                            value={addItem.name}
                            onChange={handleChangeAddItem}
                            className='outline-none text-xs text-dark-black ml-4 placeholder:text-xs placeholder:font-bold placeholder:text-grey'
                            placeholder='준비물을 입력해 보세요'
                        />
                        <button onClick={handleAddItem}>
                            <AiOutlineClose
                                className='text-grey font-medium'
                                size={20}
                            />
                        </button>
                    </div>
                )}
                {materials.length > 0 &&
                    materials.map((material) => (
                        <CarrierMaterialInput
                            key={material.id}
                            material={material}
                            editItem={editItem}
                            handleChangeMaterial={handleChangeMaterial}
                            handleChangeEditItem={handleChangeEditItem}
                            handleClickEdit={handleClickEdit}
                        />
                    ))}
            </div>
        </>
    );
};

export default CarrierSection;
