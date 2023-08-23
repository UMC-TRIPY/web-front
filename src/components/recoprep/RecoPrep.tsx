import Image from 'next/image';
import { use, useEffect, useState } from 'react';

export default function RecoPrep({ materials }: { materials: any }) {
    const [add, setAdd] = useState<string[]>([]);
    const [num, setNum] = useState<number>(0);
    const [slideItems, setSlideItems] = useState<any>();
    const [maxSlide, setMaxSlide] = useState<number>(0);
    const [offset, setOffset] = useState<any>();

    const onClick = (prep: string) => {
        const adding = [...add, prep];
        setAdd(adding);
        alert(`${prep} 가방에 담기 성공!`);
    };
    const decrease = () => {
        setNum((num) => (num === 0 ? 0 : num - 1));
    };
    const increase = () => {
        setNum((num) => (num === maxSlide - 1 ? maxSlide - 1 : num + 1));
    };
    useEffect(() => {
        let tmp: any[] = [];
        let img = document.querySelectorAll('.images-container');
        setSlideItems(img);
        let len = img.length;
        len = len % 3 === 0 ? len / 3 - 1 : Math.floor(len / 3);
        setMaxSlide(len + 1);
        for (let i = 0; i <= len; i++) {
            tmp.push(1302 * i);
        }
        setOffset(tmp);
    }, []);
    if (slideItems !== undefined) {
        slideItems.forEach((i: any) => {
            i.style.left = `${-offset[num]}px`;
        });
    }
    return (
        <div className='my-16'>
            <div className='flex justify-between'>
                <span className='text-3xl font-bold'>추천 준비물</span>
                <div className='flex'>
                    <img
                        src='/images/arrow.png'
                        alt='none'
                        className='rotate-180 hover:cursor-pointer'
                        onClick={decrease}
                    />
                    <img
                        src='/images/arrow.png'
                        alt='none'
                        className='hover:cursor-pointer'
                        onClick={increase}
                    />
                </div>
            </div>
            <div className='mt-8 flex overflow-x-hidden'>
                {materials === undefined
                    ? ''
                    : materials.map((material: any, index: number) => {
                          return (
                              <div
                                  key={`contatiner${index}`}
                                  className='flex mr-5 relative images-container'
                                  style={{
                                      left: '0px',
                                      transition: 'left 0.3s'
                                  }}
                              >
                                  <div
                                      key={`wrap${index}`}
                                      className='p-4 bg-brightgrey w-box-width h-box-height rounded-lg overflow-y-hidden'
                                  >
                                      <p
                                          key={`${material.name}${index}`}
                                          className='text-2xl font-bold mb-2'
                                      >
                                          {material.name}
                                      </p>
                                      <p key={`${material.desc}${index}`}>
                                          {material.desc}
                                      </p>
                                      <div
                                          key={`imgwrap${index}`}
                                          className='flex justify-center mt-4'
                                      >
                                          <Image
                                              width={240}
                                              height={240}
                                              key={`img${index}`}
                                              src={material.img}
                                              alt='none'
                                          />
                                      </div>
                                  </div>
                                  <button
                                      key={`${material.name}btn${index}`}
                                      className='self-end absolute bg-lightgrey py-2 px-4 rounded-3xl ml-72 mb-4'
                                      type='button'
                                      onClick={() => onClick(material.name)}
                                  >
                                      가방에 담기
                                  </button>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
}
