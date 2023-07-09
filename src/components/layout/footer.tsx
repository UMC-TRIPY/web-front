import Link from "next/link"

export default function Footer () {
    return (
        <footer className="bg-white h-248">
            <div className="container my-5 flex flex-col items-start justify-center h-full p-6">
                <div className="flex items-start space-x-8">
                    <img className="w-108 h=24 " src="/images/logo2.svg" alt="트리피 흑백 로고"></img>
                    <nav className="space-x-3 flex flex-row">
                        <Link href="/">회사소개</Link>
                        <Link href="/">고객센터</Link>
                        <Link href="/">이용약관</Link>
                        <Link href="/">개인정보 처리방침</Link>
                        <Link href="/">저작권 표기</Link>
                    </nav>
                </div>
                <div className="flex flex-col pt-10">
                    <a>(주)트리피 사업자 정보</a>
                    <a>상호: 트리피</a>
                    <a>사업자등록번호: 999-99-99999</a>
                    <a>이메일: contact@tripy.net</a>
                </div>
            </div>
        </footer>
    )
}