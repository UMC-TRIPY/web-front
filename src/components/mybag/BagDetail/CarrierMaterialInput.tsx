import { MaterialProps } from '@/app/mybag/detail/[bag_id]/page';
import { AiOutlineClose } from 'react-icons/ai';
import { EditItemProps } from './CarrierSection';
import { FiEdit } from 'react-icons/fi';

interface CarrierMaterialInputProps {
    material: MaterialProps;
    editItem: EditItemProps;
    handleChangeMaterial: (id: number, mode: 'check' | 'content') => void;
    handleChangeEditItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickEdit: (material: MaterialProps) => void;
}

export default function CarrierMaterialInput({
    material,
    editItem,
    handleChangeMaterial,
    handleChangeEditItem,
    handleClickEdit
}: CarrierMaterialInputProps) {
    return (
        <div className='flex items-center justify-between mb-3'>
            <div
                className={`flex py-3 px-4 rounded-full border border-brightgrey ${
                    editItem.id === material.id && 'bg-white border-primary'
                }`}
            >
                <button
                    onClick={() => handleChangeMaterial(material.id, 'check')}
                    className='w-5 h-5 rounded-full border border-grey flex items-center justify-center'
                >
                    {material.isChecked && (
                        <div className='w-3.5 h-3.5 bg-primary rounded-full' />
                    )}
                </button>
                <input
                    type='text'
                    value={
                        editItem.id === material.id
                            ? editItem.editContent
                            : material.name
                    }
                    readOnly={editItem.id !== material.id}
                    onChange={handleChangeEditItem}
                    className={`outline-none text-xs text-dark-black ml-4 placeholder:text-xs placeholder:font-bold placeholder:text-grey bg-inherit ${
                        editItem.id !== material.id && 'cursor-default'
                    }`}
                />
                <button>
                    <AiOutlineClose
                        className='text-grey font-medium'
                        size={20}
                    />
                </button>
            </div>
            <button onClick={() => handleClickEdit(material)}>
                <FiEdit className='text-grey font-medium' size={20} />
            </button>
        </div>
    );
}
