import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Menu({ path }: { path: string }) {
    const menus: [string, string, boolean][] = [
        ['링크', 'link', '링크' === path],
        ['갤러리', 'gallery', '갤러리' === path],
        ['파일목록', 'folder', '파일목록' === path]
    ];
    const router = useRouter();
    const MenuBar = ({ menu }: { menu: [string, string, boolean] }) => {
        return (
            <div className='flex flex-col items-center'>
                {menu[2] && (
                    <Image
                        src='/images/selected.png'
                        alt='none'
                        width={16}
                        height={16}
                    />
                )}
                <span
                    className={
                        menu[2]
                            ? 'text-primary mx-4 font-bold hover:cursor-pointer'
                            : 'text-infomenu mx-4 font-bold hover:cursor-pointer'
                    }
                    onClick={() => router.push(`/summary/list/${menu[1]}`)}
                >
                    {menu[0]}
                </span>
            </div>
        );
    };
    return (
        <div className='flex items-end mt-12 mb-4'>
            {menus.map((menu: [string, string, boolean], idx: number) => (
                <MenuBar key={`menubar${idx}`} menu={menu} />
            ))}
        </div>
    );
}
