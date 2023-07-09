export default function HotPlace() {
    return (
        <div className='mt-16'>
            <span className='text-2xl font-bold'>인기 여행지</span>
            <div
                id='map'
                className='border border-black w-full mt-8'
                style={{ height: '600px' }}
            ></div>
        </div>
    );
}
