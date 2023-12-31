import Image from 'next/image';
import { useState } from 'react';

const Translation = () => {
    const [currentLanguage, setCurrentLanguage] = useState('한국어');
    const [targetLanguage, setTargetLanguage] = useState('일본어');

    return (
        <div className='flex justify-between gap-4 w-full mt-8'>
            <div className='basis-1/2 h-60 bg-white rounded-xl border border-gray-300'>
                <div className='py-3 pl-4 border-b-2'>{currentLanguage}</div>
                <div>
                    <textarea
                        className='w-full h-32 pl-3 pt-2 resize-none text-xl'
                        placeholder='번역하고 싶은 말을 입력해보세요.'
                    ></textarea>
                </div>

                <div className='footer flex justify-between px-4'>
                    <div className='flex gap-2'>
                        <Image
                            src='/images/listen.svg'
                            className='cursor-pointer'
                            alt=''
                            width={40}
                            height={40}
                        />
                        <Image
                            src='/images/save.svg'
                            className='cursor-pointer'
                            alt=''
                            width={40}
                            height={40}
                        />
                        <Image
                            src='/images/paste.svg'
                            className='cursor-pointer'
                            alt=''
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className='flex justify-center items-center w-24 cursor-pointer bg-gray-200 rounded-2xl'>
                        번역하기
                    </div>
                </div>
            </div>
            <div className='basis-1/2 h-60 bg-white rounded-xl border border-gray-300'>
                <div className='py-3 pl-4 border-b-2'>{targetLanguage}</div>
                <div className='w-full h-32 pl-3 pt-2'></div>

                <div className='footer flex justify-between px-4'>
                    <div className='flex gap-2'>
                        <Image
                            src='/images/listen.svg'
                            className='cursor-pointer'
                            alt=''
                            width={40}
                            height={40}
                        />{' '}
                        <Image
                            src='/images/save.svg'
                            className='cursor-pointer'
                            alt=''
                            width={40}
                            height={40}
                        />{' '}
                        <Image
                            src='/images/paste.svg'
                            className='cursor-pointer'
                            alt=''
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Translation;
