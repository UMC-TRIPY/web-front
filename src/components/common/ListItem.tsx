import { useRouter } from 'next/navigation';
import RoundBtn from '../layout/roundBtn';
import { ListItemProps } from '@/types/list';

export default function ListItem({
    item,
    label,
    setModalState,
    handleDeleteBag
}: ListItemProps) {
    // Todo: interface mode에 따라 다르게 해야함
    const router = useRouter();

    const handleOpenModal = () =>
        setModalState({ isOpen: true, selectedPlace: item.place });
    const handleByLabel = () => {
        switch (label) {
            case '수정하기':
                router.push(
                    `/plan/${item.plan_id}/schedule/${item.schedule_id}/update`
                );
                return;
            case '가방 만들기':
                router.push('mybag/new');
                return;
            case '삭제하기':
                handleDeleteBag && handleDeleteBag(item.plan_id);
                return;
            default:
                alert('잘못된 접근입니다.');
                return;
        }
    };
    return (
        <div className='flex items-center justify-between py-[16.5px]'>
            <div className='w-1/3 text-center'>{item.date}</div>
            <div className='w-1/3 text-center'>{item.place}</div>
            <div className='flex w-1/3 justify-center'>
                <RoundBtn
                    label='상세보기'
                    color='bg-lightgrey'
                    onClick={handleOpenModal}
                />
                <RoundBtn
                    label={label}
                    color='bg-lightgrey'
                    onClick={handleByLabel}
                />
            </div>
        </div>
    );
}
