import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

type Props = {
    title: string;
    size: number;
    items: any;
};

const CardCarousel = ({ title, items, size }: Props) => {
    const [curSlide, setCurSlide] = useState<number>(0);

    // 이건 일단 메인페이지용 카드 랜더링.
    const renderItem = (items: any) => {
        const slideGroups = [];

        for (let i = 0; i < items.length; i += size) {
            const slideGroup = items
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
                            <span className='flex text-sm'>{item.desc}</span>
                        </div>
                        <button className='flex w-1/3 h-10 ml-5 justify-center items-center rounded-md opacity-50 bg-white hover:opacity-100'>
                            둘러보기
                        </button>
                    </div>
                ));

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
                showStatus={false}
                selectedItem={curSlide}
            >
                {renderItem(items)}
            </Carousel>
        </>
    );
};

export default CardCarousel;