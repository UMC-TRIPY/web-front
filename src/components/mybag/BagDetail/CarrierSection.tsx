'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface IMaterial {
    id: string;
    name: string;
    clicked: boolean;
}
interface ICarrierProps {
    materials: IMaterial[];
    setMaterials: React.Dispatch<React.SetStateAction<IMaterial[]>>;
}

const CarrierSection = ({ materials, setMaterials }: ICarrierProps) => {
    const handleCheckbox = (e: any) => {
        const id = e.target.id;
        setMaterials(
            materials.map((material) =>
                material.id === id
                    ? { ...material, clicked: !material.clicked }
                    : material
            )
        );
    };

    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [addText, setAddText] = useState<string>('');

    const handleClickAdd = () => {
        setIsAdd((prev) => !prev);
    };

    const handleClickEnd = () => {
        const id = materials.length.toString();
        setIsAdd(false);
        if (addText.length > 0)
            setMaterials([...materials, { id, name: addText, clicked: false }]);
        setAddText('');
    };

    const handleClickDelete = (id: string) => {
        setMaterials(materials.filter((material) => material.id !== id));
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
                className='flex flex-col gap-8 p-4 bg-brightgrey '
            >
                <div className='flex justify-end gap-2'>
                    {isAdd && (
                        <div
                            className='flex justify-center items-center w-fit h-8 p-4 bg-lightgrey rounded-full cursor-pointer'
                            onClick={handleClickEnd}
                        >
                            입력완료
                        </div>
                    )}
                    <div
                        className='flex justify-center items-center w-fit h-8 p-4 bg-lightgrey rounded-full cursor-pointer'
                        onClick={handleClickAdd}
                    >
                        {isAdd ? '취소' : '추가하기'}
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
                        <div
                            className={
                                'flex gap-4 px-4 py-2 rounded-full transition-all duration-500' +
                                (material.clicked
                                    ? ' bg-lightgrey text-xs text-grey'
                                    : '')
                            }
                        >
                            <input
                                id={material.id}
                                type='checkbox'
                                className='flex justify-center items-center w-6 rounded-full appearance-none border-2 bg-white checked:after:content-["✓"] cursor-pointer'
                                onClick={(e) => handleCheckbox(e)}
                            ></input>
                            <div>{material.name}</div>
                            <div
                                className='flex items-center cursor-pointer'
                                onClick={() => handleClickDelete(material.id)}
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='cursor-pointer'>↓</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CarrierSection;
