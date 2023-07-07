import React from 'react';

interface Informations {
    local: string;
    korea: string;
    month: string;
}

export default function InfoWeather({ temperatures }: any) {
    const Information = ({ local, korea, month }: Informations) => {
        return (
            <>
                <div className='h-4/5 border-r border-lightgrey' />
                <div className='flex-col mx-12'>
                    <span className='text-2xl'>
                        {local}/
                        <span className='text-grey text-lg'>{korea}</span>
                    </span>
                    <div className='my-3 text-lg'>{month}</div>
                </div>
                <div className='h-4/5 border-r border-lightgrey' />
            </>
        );
    };

    return (
        <div className='flex'>
            {temperatures.map((temperature: any, index: number) => {
                return (
                    <Information
                        key={`info${index}`}
                        local={temperature[0]}
                        korea={temperature[1]}
                        month={temperature[2]}
                    />
                );
            })}
        </div>
    );
}
