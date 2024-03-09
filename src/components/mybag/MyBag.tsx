import HelpBot from './HelpBot';
import List from '../common/List';

export default function MyBag() {
    const handleDeleteBag = (bagId: number) => {};
    return (
        <div className='flex flex-col'>
            <div className='font-bold text-5xl mt-20 mb-8 mx-auto'>
                여행 가방을 등록해볼까요?
            </div>
            {/* <HelpBot width='w-[1280px]' /> */}
            <List
                mode='travel'
                items={[
                    {
                        plan_id: 1,
                        date: '2023.07.30~2023.08.05 (2박 3일)',
                        place: '도쿄',
                        schedule_id: 2
                    }
                ]}
                label='가방 만들기'
            />
            <List
                handleDeleteBag={handleDeleteBag}
                mode='bag'
                items={[]}
                label='삭제하기'
            />
        </div>
    );
}
