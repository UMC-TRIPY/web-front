'use client';
import List from '@/components/common/List';

export default function mybag() {
    const handleDeleteBag = (bagId: number) => {};
    return (
        <div className='flex flex-col'>
            <div className='font-bold text-5xl mt-20 mb-8 mx-auto'>
                여행 가방을 등록해볼까요?
            </div>
            {/* <HelpBot width='w-[1280px]' /> */}
            <List mode='travel' items={[]} label='가방 만들기' />
            <List
                handleDeleteBag={handleDeleteBag}
                mode='bag'
                items={[]}
                label='삭제하기'
            />
        </div>
    );
}
