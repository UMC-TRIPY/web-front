import Link from "next/link";

export default function Header () {
    return (
        <header className='x-0 top-0 z-50 left-0 w-full  bg-white border-b border-gray-300'>
            <div className='container my-1.5 flex items-center justify-between flex-wrap p-5'>
                <div className="flex items-center space-x-8">
                    <Link href='/' className="flex items-center space-x-2">
                        <img className='w-120' src='/images/logo1.svg' alt="트리피 로고" />
                    </Link>
                    <nav className="space-x-4">
                        <Link href="/">여행정보</Link>
                        <Link href="/">일정관리</Link>
                        <Link href="/">여행가방</Link>
                        <Link href="/">커뮤니티</Link>
                        <Link href="/">이용안내</Link>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href='/'>마이페이지</Link>
                    <Link href='/'>로그아웃</Link>
                    <Link href='/'>
                        <img className='w-12 h-12' src='/images/user.svg' alt="프로필 사진" />
                    </Link>
                </div>
            </div>
        </header>
    );
}