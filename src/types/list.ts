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

export interface ListProps {
    mode: 'travel' | 'bag';
    items: ItemProps[];
    label: '수정하기' | '가방 만들기' | '삭제하기';
    handleDeleteBag?: (bagId: number) => void;
}

export interface ListItemProps {
    item: ItemProps;
    label: '수정하기' | '가방 만들기' | '삭제하기';
    setModalState: React.Dispatch<React.SetStateAction<ListModalProps>>;
    handleDeleteBag?: (bagId: number) => void;
}
