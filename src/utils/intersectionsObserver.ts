import { MenuProps } from '@/types/menu';

interface IntersectionObserverProps {
    menuRef: React.MutableRefObject<MenuProps[]>;
    setMenus: React.Dispatch<React.SetStateAction<MenuProps[]>>;
    loading: React.MutableRefObject<boolean>;
}

const defaultMenus = [
    { id: 'header', name: '메인', offsetTop: 0, isIntersected: true },
    {
        id: 'hot-place',
        name: '명소',
        offsetTop: 0,
        isIntersected: false
    },
    {
        id: 'materials',
        name: '준비물',
        offsetTop: 0,
        isIntersected: false
    },
    {
        id: 'community',
        name: '후기/회화',
        offsetTop: 0,
        isIntersected: false
    }
];

const interSectionObserver = ({
    menuRef,
    setMenus,
    loading
}: IntersectionObserverProps) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        if (loading.current) {
            const tempMenus: MenuProps[] = [];
            entries.forEach((entry, idx) =>
                tempMenus.push({
                    id: defaultMenus[idx].id,
                    name: defaultMenus[idx].name,
                    offsetTop: entry.target.offsetTop - 101,
                    isIntersected: defaultMenus[idx].isIntersected
                })
            );
            setMenus(tempMenus);
            menuRef.current = tempMenus;
            loading.current = false;
            return;
        }
        entries.map((entry) => {
            if (entry.isIntersecting) {
                const result = menuRef.current.map((menu: MenuProps) => {
                    return {
                        ...menu,
                        isIntersected: entry.target.id === menu.id
                    };
                });
                setMenus(result);
            }
        });
    }, options);

    const targets: HTMLElement[] | null = [
        document.querySelector('#header')!,
        document.querySelector('#hot-place')!,
        document.querySelector('#materials')!,
        document.querySelector('#community')!
    ];

    targets.forEach((target: HTMLElement) => {
        observer.observe(target);
    });
};

export default interSectionObserver;
