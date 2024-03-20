export interface ItemProps {
    date: string;
    place: string;
    plan_id: number;
    schedule_id: number;
}

export interface ListModalProps {
    isOpen: boolean;
    selectedPlace: string;
}

interface CommonListProps {
    mode: 'travel' | 'bag';
    label: '수정하기' | '가방 만들기' | '삭제하기' | '모아보기';
    handleDeleteBag?: (bagId: number) => void;
}

export interface ListProps extends CommonListProps {
    items: ItemProps[];
}

export interface ListItemProps extends CommonListProps {
    item: ItemProps;
}
