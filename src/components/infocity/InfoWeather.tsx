import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    IoThunderstormOutline,
    IoCloudyOutline,
    IoSunnyOutline,
    IoSnowOutline,
    IoRainyOutline
} from 'react-icons/io5';

interface Informations {
    local: string;
    korea: string;
    month: string;
}

export default function InfoWeather() {
    const [today, setToday] = useState<string>('');
    const [temperatures, setTemperatures] = useState<any>([]);
    const weatehrKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    console.log(temperatures);
    useEffect(() => {
        let temp = [['1일 후'], ['2일 후'], ['3일 후'], ['4일 후']];
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast/daily?q=Tokyo&cnt=5&appid=${weatehrKey}&units=metric`
            )
            .then((res) => {
                setToday(`${res.data.list[0].temp.day.toFixed(0)}º`);
                for (let i = 0; i < 4; i++) {
                    temp[i].unshift(
                        `${res.data.list[i + 1].temp.day.toFixed(0)}º`
                    );
                }
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Seoul&cnt=5&appid=${weatehrKey}&units=metric`
                    )
                    .then((res) => {
                        for (let i = 0; i < 4; i++) {
                            temp[i].unshift(
                                `${res.data.list[i + 1].temp.day.toFixed(0)}º`
                            );
                        }
                        setTemperatures(temp);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }, []);

    const Information = ({ local, korea, month }: Informations) => {
        return (
            <>
                <div className='h-4/5 border-r border-lightgrey' />
                <div className='flex flex-col w-full items-center'>
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
            <div className='w-20 h-32 mt-3 border border-grey rounded flex flex-col items-center'>
                <span className='text-xs text-grey my-3'>현지 기온</span>
                <IoCloudyOutline size={40} />
                <span className='my-3 text-lg'>{today}</span>
            </div>
            <div className=' h-32 mt-3 border border-grey rounded flex flex-col items-center ml-5 w-full'>
                <span className='text-xs text-grey my-3'>
                    월별 현지/대한민국 기온
                </span>
                <div className='flex justify-evenly w-full'>
                    {temperatures.length === 0
                        ? 'Loading...'
                        : temperatures.map(
                              (temperature: any, index: number) => {
                                  return (
                                      <Information
                                          key={`info${index}`}
                                          local={temperature[0]}
                                          korea={temperature[1]}
                                          month={temperature[2]}
                                      />
                                  );
                              }
                          )}
                </div>
            </div>
        </div>
    );
}
