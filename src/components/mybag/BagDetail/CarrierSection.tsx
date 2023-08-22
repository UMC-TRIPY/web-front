'use client';

import {
    addMaterial,
    changeCheckMaterial,
    deleteMaterial,
    editMaterialName
} from '@/apis/bag';
import { bagIDState } from '@/states/schedule';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useRecoilValue } from 'recoil';

interface IMaterial {
    materials_index: number;
    materials_name: string;
    check_box: boolean;
}

interface IMaterialProps extends IMaterial {
    // check_box: boolean;
    edited: boolean;
}

interface ICarrierProps {
    materials: IMaterialProps[];
    setMaterials: React.Dispatch<React.SetStateAction<IMaterialProps[]>>;
}

const CarrierSection = ({ materials, setMaterials }: ICarrierProps) => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [addText, setAddText] = useState<string>('');
    const [editText, setEditText] = useState<string>('');

    const bagID = useRecoilValue(bagIDState);
    const [clickedMaterial, setClickedMaterial] = useState<number>(-1);

    const handleCheckbox = async (e: any) => {
        const id = parseInt(e.target.id);
        await changeCheckMaterial(bagID, id);
        // await changeCheckMaterial(16, id);
        setMaterials(
            materials.map((material) =>
                material.materials_index === id
                    ? { ...material, check_box: !material.check_box }
                    : material
            )
        );
    };

    const handleClickAdd = () => {
        setIsAdd((prev) => !prev);
    };

    const handleClickEndAdd = async () => {
        const id = materials.length;
        setIsAdd(false);
        addMaterial(bagID, addText);
        // await addMaterial(16, addText);
        if (addText.length > 0)
            setMaterials([
                {
                    materials_index: id,
                    materials_name: addText,
                    check_box: false,
                    edited: false
                },
                ...materials
            ]);
        setAddText('');
    };

    const handleClickDelete = async (id: number) => {
        await deleteMaterial(bagID, id);
        setMaterials(
            materials.filter((material) => material.materials_index !== id)
        );
    };

    const handleClickEdit = (id: number) => {
        setIsEdit(true);
        setClickedMaterial(id);
        const selected = materials.filter(
            (material) => material.materials_index === id
        );
        setEditText(selected[0].materials_name);
        setMaterials(
            materials.map((material) =>
                material.materials_index === id
                    ? { ...material, edited: true }
                    : material
            )
        );
    };

    const handleClickEndEdit = async (mid: number) => {
        setIsEdit(false);
        await editMaterialName(mid, editText);
        setMaterials(
            materials.map((material) =>
                material.edited
                    ? { ...material, materials_name: editText, edited: false }
                    : material
            )
        );
        setEditText('');
    };

    const handleClickCancelEdit = () => {
        setIsEdit(false);
        setMaterials(
            materials.map((material) =>
                material.edited ? { ...material, edited: false } : material
            )
        );
    };

    return (
        <>
            <div>
                <div id='carrier-header' className='flex justify-center'>
                    <Image
                        src='/images/carrierHandle.svg'
                        alt=''
                        width={250}
                        height={200}
                        priority={true}
                    />
                    <div className='absolute text-white text-2xl pt-1'>
                        캐리어
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex justify-between w-[38%]'>
                        <div className='w-8 h-12 bg-lightgrey'></div>
                        <div className='w-8 h-12 bg-lightgrey'></div>
                    </div>
                </div>
            </div>
            <div
                id='carrier-body'
                className='flex flex-col gap-8 p-4 bg-brightgrey h-full overflow-scroll border-0'
            >
                <div className='flex justify-end gap-2'>
                    {(isAdd || isEdit) && (
                        <div
                            className='flex justify-center items-center w-fit h-8 p-4 bg-lightgrey rounded-full cursor-pointer'
                            onClick={
                                isAdd
                                    ? handleClickEndAdd
                                    : () => handleClickEndEdit(clickedMaterial)
                            }
                        >
                            입력완료
                        </div>
                    )}
                    <div
                        className='flex justify-center items-center w-fit h-8 p-4 bg-lightgrey rounded-full cursor-pointer'
                        onClick={
                            isEdit ? handleClickCancelEdit : handleClickAdd
                        }
                    >
                        {isAdd || isEdit ? '취소' : '추가하기'}
                    </div>
                </div>
                {isAdd && (
                    <div className='flex items-center w-fit p-2 ml-4 bg-white rounded-full'>
                        <input
                            className='border-0 pl-2 rounded-full outline-none'
                            placeholder='준비물을 입력해보세요'
                            value={addText}
                            onChange={(e) => setAddText(e.target.value)}
                        />
                        <AiOutlineClose
                            className='cursor-pointer'
                            onClick={() => setAddText('')}
                        />
                    </div>
                )}

                {materials.map((material, idx) => (
                    <div
                        key={idx}
                        className='flex justify-between items-center mx-4'
                    >
                        {material.edited ? (
                            <div className='flex items-center w-fit p-2 ml-4 bg-white rounded-full'>
                                <input
                                    className='border-0 pl-2 rounded-full outline-none'
                                    placeholder='준비물을 입력해보세요'
                                    value={editText}
                                    onChange={(e) =>
                                        setEditText(e.target.value)
                                    }
                                />
                                <AiOutlineClose
                                    className='cursor-pointer'
                                    onClick={() => setEditText('')}
                                />
                            </div>
                        ) : (
                            <div
                                className={
                                    'flex gap-4 px-4 py-2 rounded-full transition-all duration-500' +
                                    (material.check_box
                                        ? ' bg-lightgrey text-xs text-grey'
                                        : '')
                                }
                            >
                                <input
                                    id={material.materials_index.toString()}
                                    checked={material.check_box}
                                    type='checkbox'
                                    className='flex justify-center items-center w-6 rounded-full appearance-none border-2 bg-white checked:after:content-["✓"] cursor-pointer'
                                    onChange={(e) => handleCheckbox(e)}
                                ></input>
                                <div>{material.materials_name}</div>
                                <div
                                    className='flex items-center cursor-pointer'
                                    onClick={() =>
                                        handleClickDelete(
                                            material.materials_index
                                        )
                                    }
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                        )}

                        {isEdit
                            ? material.edited && (
                                  <AiOutlineClose
                                      className='cursor-pointer'
                                      onClick={handleClickCancelEdit}
                                  />
                              )
                            : !isAdd && (
                                  <FiEdit
                                      className='cursor-pointer'
                                      onClick={() =>
                                          handleClickEdit(
                                              material.materials_index
                                          )
                                      }
                                  />
                              )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CarrierSection;
