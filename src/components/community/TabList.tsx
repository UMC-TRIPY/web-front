import React from 'react';
import TabListItem from './TabListItem';

const TabList = (props: any) => {
    const { tabs } = props;
    return (
        <div
            className='tab-list'
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '15px'
            }}
        >
            {tabs.map((tab: any, idx: number) => (
                <TabListItem tab={tab} key={idx} />
            ))}
        </div>
    );
};

export default TabList;
