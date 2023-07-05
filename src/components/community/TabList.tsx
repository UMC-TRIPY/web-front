import React from 'react';
import TabListItem from './TabListItem';

const TabList = (props: any) => {
    const { tabs, handleClickTab } = props;
    return (
        <div className='flex justify-around mt-4 border-b-2 border-gray-100'>
            {tabs.map((tab: any, idx: number) => (
                <TabListItem
                    tab={tab}
                    handleClickTab={handleClickTab}
                    key={idx}
                />
            ))}
        </div>
    );
};

export default TabList;
