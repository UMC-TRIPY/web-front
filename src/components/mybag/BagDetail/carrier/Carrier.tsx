'use client';
import React, { useCallback, useState } from 'react';

import { MaterialProps } from '@/app/mybag/detail/[bag_id]/page';
import RoundedButton from '@/components/common/button/RoundedButton';

import CarrierMaterial from './CarrierMaterial';
import CarrierHandle from './CarrierHandle';
import CarrierAddMaterial from './CarrierAddMaterial';

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
    const isEditMode = editItem.id !== -1;
    const completeButtonLabel = isEditMode ? '입력완료' : '추가하기';

    const handleAddItem = () =>
        isEditMode
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

    const handleDeleteMaterial = (id: number) => {
        const newMaterials = materials.filter((material) => material.id !== id);
        setMaterials(newMaterials);
    };

    const handleClickEdit = useCallback(
        (material: MaterialProps) =>
            editItem.id === material.id
                ? handleStopEditItem()
                : handleStartEditItem(material),
        [editItem.id]
    );

    const Button = useCallback(
        () =>
            addItem.isEditing ? (
                <>
                    <RoundedButton onClick={handleCompleteAddItem} smallLabel>
                        완료
                    </RoundedButton>
                    <RoundedButton onClick={handleStopAddItem} smallLabel>
                        취소
                    </RoundedButton>
                </>
            ) : (
                <>
                    {isEditMode && (
                        <RoundedButton onClick={handleStopEditItem} smallLabel>
                            취소
                        </RoundedButton>
                    )}
                    <RoundedButton onClick={handleAddItem} smallLabel>
                        {completeButtonLabel}
                    </RoundedButton>
                </>
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [addItem.isEditing, completeButtonLabel, isEditMode]
    );
    return (
        <>
            <CarrierHandle />
            <div className='flex flex-col p-3 bg-brightgrey h-full'>
                <div className='flex gap-2 justify-end mb-2'>
                    <Button />
                </div>
                {addItem.isEditing && (
                    <CarrierAddMaterial
                        name={addItem.name}
                        handleChangeAddItem={handleChangeAddItem}
                        handleAddItem={handleAddItem}
                    />
                )}
                {materials.length > 0 &&
                    materials.map((material) => (
                        <CarrierMaterial
                            key={material.id}
                            material={material}
                            editItem={editItem}
                            handleChangeMaterial={handleChangeMaterial}
                            handleChangeEditItem={handleChangeEditItem}
                            handleClickEdit={handleClickEdit}
                            handleDeleteMaterial={handleDeleteMaterial}
                        />
                    ))}
            </div>
        </>
    );
};

export default CarrierSection;
