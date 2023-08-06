import { TiWeatherStormy } from 'react-icons/ti';

const WeatherSection = () => {
    return (
        <div className='h-2/5 bg-brightgrey'>
            <div className='flex h-1/5 items-center text-2xl font-bold pl-8'>
                날씨
            </div>
            <div className='flex gap-8 h-1/5 justify-center items-center m-auto'>
                <div className='flex gap-2'>
                    <div>Day 1</div>
                    <div>6월 30일</div>
                </div>
                <div className='flex gap-2'>
                    <div>마커</div>
                    <div>부산, 해운대</div>
                    <div className='text-grey'>대한민국</div>
                </div>
            </div>
            <div className='flex h-3/5 justify-center items-center gap-12'>
                <TiWeatherStormy size={100} />
                <div className='flex flex-col gap-2'>
                    <div className='text-4xl'>16°</div>
                    <div className='flex gap-4'>
                        <div className='font-bold'>번개와 비구름</div>
                        <div>23°</div>
                        <div>12°</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherSection;
