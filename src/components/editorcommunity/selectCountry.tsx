export default function SelectCountry () {
    return (
        <div className="mx-4">
            <div className="text-3xl font-bold mb-8">게시글 작성</div>
            <div className="text-xl font-bold">국가를 선택해주세요.</div>
            <div className="h-[336px] bg-brightgrey rounded-lg my-2">
                <div className="flex">
                    <div className="h-[336px] flex flex-col justify-between w-1/6 py-4 pl-6 border-r border-lightgrey">
                        <span className="font-bold text-grey">아시아</span>
                        <span className="font-bold text-grey">유럽</span>
                        <span className="font-bold text-grey">기타</span>
                    </div>
                    <div className="flex flex-col justify-between w-1/6 py-4 pl-6 border-r border-lightgrey">
                        <span className="font-bold">일본</span>
                        <span className="font-bold">영국</span>
                        <span className="font-bold">프랑스</span>
                        <span className="font-bold">이탈리아</span>
                        <span className="font-bold">스페인</span>
                        <span className="font-bold">기타</span>
                    </div>
                    <div className="flex flex-col justify-between  w-2/3 py-4 pl-6">
                        <span>도쿄 오사카 후쿠오카 오키나와 교토 홋카이도</span>
                        <span>런던</span>
                        <span>파리</span>
                        <span>로마 피렌체 밀라노 베네치아</span>
                        <span>마드리드 바르셀로나 톨레도 세비야 그라나다</span>
                        <span>기타</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-2">
                <div className="w-1/6 h-12 bg-brightgrey rounded-lg flex items-center justify-center">
                    <span className="text-grey">
                        국가명
                    </span>
                </div>
                <input 
                    className="w-5/6 ml-5 pl-4 border border-lightgrey rounded-lg"
                    placeholder="제목을 입력해주세요." 
                />
            </div>
        </div>
    )
}