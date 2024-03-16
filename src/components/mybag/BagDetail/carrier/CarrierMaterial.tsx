import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

import { MaterialProps } from '@/app/mybag/detail/[bag_id]/page';

import { EditItemProps } from './Carrier';

interface CarrierMaterialInputProps {
    material: MaterialProps;
    editItem: EditItemProps;
    handleChangeMaterial: (id: number, mode: 'check' | 'content') => void;
    handleChangeEditItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickEdit: (material: MaterialProps) => void;
    handleDeleteMaterial: (id: number) => void;
}

export default function CarrierMaterial({
    material,
    editItem,
    handleChangeMaterial,
    handleChangeEditItem,
    handleClickEdit,
    handleDeleteMaterial
}: CarrierMaterialInputProps) {
    const isEditMode = editItem.id === material.id;
    const value = isEditMode ? editItem.editContent : material.name;

    const onCheckMaterial = () => handleChangeMaterial(material.id, 'check');

    const onClickEdit = () => handleClickEdit(material);

    const onClickDelete = () => handleDeleteMaterial(material.id);
    return (
        <div className='flex items-center justify-between mb-3'>
            <div
                className={`flex py-3 px-4 rounded-full border border-brightgrey ${
                    isEditMode && 'bg-white border-primary'
                }`}
            >
                <button
                    onClick={onCheckMaterial}
                    className='w-5 h-5 rounded-full border border-grey flex items-center justify-center'
                >
                    {material.isChecked && (
                        <div className='w-3.5 h-3.5 bg-primary rounded-full' />
                    )}
                </button>
                <input
                    type='text'
                    value={value}
                    readOnly={!isEditMode}
                    onChange={handleChangeEditItem}
                    className={`outline-none text-xs text-dark-black ml-4 placeholder:text-xs placeholder:font-bold placeholder:text-grey bg-inherit ${
                        !isEditMode && 'cursor-default'
                    }`}
                />
                <button onClick={onClickDelete}>
                    <AiOutlineClose
                        className='text-grey font-medium'
                        size={20}
                    />
                </button>
            </div>
            <button onClick={onClickEdit}>
                <FiEdit className='text-grey font-medium' size={20} />
            </button>
        </div>
    );
}
