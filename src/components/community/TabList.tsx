import React from 'react';
import TabItem from './TabItem';

const TabList = (props: any) => {
    const { tabs, handleClickTab } = props;
    return (
        <div className='flex justify-around mt-4 border-b-2 border-gray-100'>
            {tabs.map((tab: any, idx: number) => (
                <TabItem tab={tab} handleClickTab={handleClickTab} key={idx} />
            ))}
        </div>
    );
};

export default TabList;
