import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

type Props = {
    mode: number;
    title: string;
    size: number;
    items: any;
};

const CardCarousel = ({ mode, title, items, size }: Props) => {
    const [curSlide, setCurSlide] = useState<number>(0);

    /**
     *
     * @param mode number: 인기여행지 0, 추천준비물 1
     * @param items
     * @returns
     */
    const renderItem = (mode: number, items: any) => {
        const slideGroups = [];
        let slideGroup;

        for (let i = 0; i < items.length; i += size) {
            if (mode === 0) {
                slideGroup = items
                    .slice(i, i + size)
                    .map((item: any, index: number) => (
                        <div
                            key={index}
                            className='h-96 mx-2 rounded-md bg-gray-100 ease-in duration-300'
                            style={{
                                flexBasis: `${100 / size}%`,
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: 'cover'
                            }}
                        >
                            <div className='flex flex-col h-5/6 p-5 justify-start'>
                                <span className='flex font-bold text-2xl'>
                                    {item.title}
                                </span>
                                <span className='flex text-sm'>
                                    {item.desc}
                                </span>
                            </div>
                            <button className='flex w-1/3 h-10 ml-5 justify-center items-center rounded-md opacity-50 bg-white hover:opacity-100'>
                                둘러보기
                            </button>
                        </div>
                    ));
            } else {
                slideGroup = items
                    .slice(i, i + size)
                    .map((item: any, index: number) => (
                        <div
                            key={index}
                            className='h-96 mx-2 rounded-md bg-gray-100 ease-in duration-300'
                            style={{
                                flexBasis: `${100 / size}%`
                            }}
                        >
                            <div className='flex flex-col h-1/6 p-5 text-start'>
                                <span className='font-bold text-2xl'>
                                    {item.title}
                                </span>
                                <span className='text-sm'>{item.desc}</span>
                            </div>
                            <img
                                className='w-full h-4/6 p-5'
                                src={item.img}
                                alt='none'
                            />
                            <div className='flex justify-end'>
                                <button className='flex w-1/3 h-8 mr-5 justify-center items-center rounded-3xl bg-lightgrey hover:bg-gray-300'>
                                    <span className='text-base'>
                                        가방에 담기
                                    </span>
                                </button>
                            </div>
                        </div>
                    ));
            }

            slideGroups.push(slideGroup);
        }

        return slideGroups.map((slideGroup, index) => (
            <div className='flex w-full justify-start' key={index}>
                {slideGroup}
            </div>
        ));
    };

    // 화살표 이용한 페이지 이동 시 페이지 수가 넘어가지 않게 방지하는 함수.
    const fit = (value: number, min: number, max: number): number => {
        return Math.max(min, Math.min(value, max));
    };

    useEffect(() => {
        setCurSlide(fit(curSlide, 0, Math.floor(items.length / size)));
    }, [curSlide]);

    return (
        <>
            <div className='flex my-5 justify-between'>
                <span className='font-bold text-2xl'>{title}</span>
                <div className='flex'>
                    <Image
                        src='/images/arrow.png'
                        width={30}
                        height={20}
                        alt='none'
                        className='rotate-180 hover:cursor-pointer'
                        onClick={() => {
                            setCurSlide((val) => val - 1);
                        }}
                    />
                    <Image
                        src='/images/arrow.png'
                        width={30}
                        height={20}
                        alt='none'
                        className='hover:cursor-pointer'
                        onClick={() => {
                            setCurSlide((val) => val + 1);
                        }}
                    />
                </div>
            </div>
            <Carousel
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                selectedItem={curSlide}
            >
                {renderItem(mode, items)}
            </Carousel>
        </>
    );
};

export default CardCarousel;
