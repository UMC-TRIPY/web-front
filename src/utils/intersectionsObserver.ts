import { MenuProps } from '@/types/menu';

interface IntersectionObserverProps {
    menus: MenuProps[];
    setMenus: React.Dispatch<React.SetStateAction<MenuProps[]>>;
    loading: React.MutableRefObject<boolean>;
}

// 밖으로 빼거나 해야할 듯
// 해당 파일 추후 전체적인 리팩토링 필요
const defaultMenus = [
    { id: 'main', name: '메인', offsetTop: 0, isIntersected: true },
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
    menus,
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
            entries.forEach((entry, idx) =>
                menus.push({
                    id: defaultMenus[idx].id,
                    name: defaultMenus[idx].name,
                    offsetTop: entry.target.offsetTop - 101,
                    isIntersected: idx === 0 ? true : false
                })
            );
            loading.current = false;
        }
        entries.map((entry) => {
            if (entry.isIntersecting) {
                const result = menus.map((menu: MenuProps) => {
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
        document.querySelector('#main')!,
        document.querySelector('#hot-place')!,
        document.querySelector('#materials')!,
        document.querySelector('#community')!
    ];

    targets.forEach((target: HTMLElement) => {
        observer.observe(target);
    });
};

export default interSectionObserver;
