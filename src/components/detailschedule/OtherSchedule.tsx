export default function OtherSchedule() {
    return (
        <div className='flex justify-between mt-[85px]'>
            <div className='border border-lightgrey w-[51%] py-5 px-5 rounded-lg text-xl'>
                <span className='mr-7 text-grey'>선택 일정</span>
                <span>2023.06.30~2023.07.02 (2박 3일)</span>
            </div>
            <div className='border border-lightgrey w-[31%] py-5 px-5 rounded-lg text-xl'>
                <span className='mr-7 text-grey'>여행 지역</span>
                <span>부산</span>
            </div>
            <button className='border border-black w-[16%] text-xl rounded-lg text-xl bg-primary border-primary'>
                다른 일정 선택
            </button>
        </div>
    );
}
