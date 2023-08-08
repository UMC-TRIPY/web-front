import { useEffect, useState } from 'react';

const DropdownList = (props: any) => {
    return (
        <div
            className={
                props.visibility
                    ? 'flex justify-center absolute overflow-hidden transition duration-500 translate-y-10 bg-white w-28 shadow-xl p-2'
                    : 'flex justify-center absolute bg-white shadow-xl'
            }
        >
            <div className='w-full'>{props.visibility && props.children}</div>
        </div>
    );
};

export default DropdownList;
