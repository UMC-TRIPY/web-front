const info = () => {
    return (
        <div
            className='info-Container'
            style={{ width: '60vw', margin: '0 auto' }}
        >
            <div
                className='header'
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <div className='text-3xl font-bold'>도쿄 커뮤니티</div>
                <div
                    style={{
                        display: 'flex',
                        flexBasis: '30%',
                        justifyContent: 'space-around'
                    }}
                >
                    <div>검색구분</div>
                    <div>드랍다운</div>
                    <div>검색어를 입력하세요</div>
                </div>
            </div>
            <div
                className='tab-bar'
                style={{ display: 'flex', justifyContent: 'space-around' }}
            >
                <div>여행자 보험</div>
                <div>관광지</div>
                <div>물가</div>
                <div>맛집</div>
                <div>음식</div>
                <div>환전</div>
                <div>현금</div>
                <div>카드</div>
                <div>쇼핑</div>
                <div>날씨</div>
            </div>
        </div>
    );
};

export default info;
