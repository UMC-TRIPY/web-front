import Image from 'next/image';
import React from 'react';

interface ITab {
    id: string;
    text: string;
    clicked: boolean;
}

interface ITopTabProps {
    tabs: ITab[];
    handleClickTab: any;
}

const TopTab = ({ tabs, handleClickTab }: ITopTabProps) => {
    return (
        <>
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    id={tab.id}
                    className={
                        tab.clicked
                            ? 'text-main-color cursor-pointer'
                            : 'text-grey cursor-pointer'
                    }
                    onClick={handleClickTab}
                >
                    <div className='flex justify-center'>
                        {tab.clicked && (
                            <Image
                                src='/images/selected.png'
                                alt=''
                                width={15}
                                height={15}
                            />
                        )}
                    </div>
                    {tab.text}
                </div>
            ))}
        </>
    );
};

export default TopTab;
