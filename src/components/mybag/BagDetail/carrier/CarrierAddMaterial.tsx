import { AiOutlineClose } from 'react-icons/ai';

interface CarrierAddMaterialProps {
    name: string;
    handleChangeAddItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddItem: () => void;
}

export default function CarrierAddMaterial({
    name,
    handleChangeAddItem,
    handleAddItem
}: CarrierAddMaterialProps) {
    return (
        <div className='flex items-center bg-white py-3 px-4 max-w-max rounded-full mb-3 border border-brightgrey'>
            <div className='w-5 h-5 rounded-full border border-grey flex items-center justify-center' />
            <input
                type='text'
                value={name}
                onChange={handleChangeAddItem}
                className='outline-none text-xs text-dark-black ml-4 placeholder:text-xs placeholder:font-bold placeholder:text-grey'
                placeholder='준비물을 입력해 보세요'
            />
            <button onClick={handleAddItem}>
                <AiOutlineClose className='text-grey font-medium' size={20} />
            </button>
        </div>
    );
}
