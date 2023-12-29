import { MenuProps } from '@/types/menu';
import { Ref, RefObject } from 'react';

interface IntersectionObserverProps {
    menus: MenuProps[];
    setMenus: React.Dispatch<React.SetStateAction<MenuProps[]>>;
}

const interSectionObserver = ({
    menus,
    setMenus
}: IntersectionObserverProps) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        // loading 여부에 따라서 offsetTop 부여하면 될듯
        entries.map((entry) => {
            console.log(entry.target.offsetTop);
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
        document.querySelector('#community')!,
        document.querySelector('#menu')!
    ];

    targets.forEach((target: HTMLElement) => {
        observer.observe(target);
    });
};

export default interSectionObserver;
