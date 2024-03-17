import { IoIosArrowDown } from 'react-icons/io';
import { TiWeatherStormy } from 'react-icons/ti';
import { SlLocationPin } from 'react-icons/sl';

export default function Weather() {
    return (
        <div className='bg-brightgrey p-5'>
            <h1 className='text-2xl font-bold'>날씨</h1>
            <div className='flex justify-center gap-16 mt-6 mb-10'>
                <div className='flex text-xs items-center gap-3'>
                    <span className='text-dark-black'>Day 1</span>
                    <div className='flex gap-2 items-center'>
                        <span className='font-bold'>6월 30일</span>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <SlLocationPin size={16} />
                    <span className='text-xs text-dark-black'>
                        부산, 해운대
                    </span>
                    <span className='text-xs text-grey'>대한민국</span>
                </div>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <TiWeatherStormy size={90} />
                <div className='flex flex-col gap-3'>
                    <span className='text-[32px]'>16°</span>
                    <div className='flex gap-3'>
                        <span className='font-bold'>번개와 비구름</span>
                        <span>23°</span>
                        <span>12°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
