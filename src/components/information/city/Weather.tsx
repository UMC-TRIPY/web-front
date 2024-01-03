import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
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

export default function Weather({ cityName }: { cityName: string }) {
    const [today, setToday] = useState<string>('');
    const [temperatures, setTemperatures] = useState<any>([]);
    const [weather, setWeather] = useState<string>('');
    const weatehrKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

    const WeatherComp = () => {
        if (weather === 'Snow') return <IoSnowOutline size={40} />;
        else if (weather === 'Clear')
            return <IoSunnyOutline size={40} key={`sunnyicon`} />;
        else if (weather === 'mist' || weather === 'Clouds')
            return <IoCloudyOutline size={40} key={`cloudyicon`} />;
        else return <IoRainyOutline size={40} key={`rainyicon`} />;
    };

    useEffect(() => {
        let temp: any = [];
        for (let i = 1; i <= 4; i++) {
            const forecast = new Date();
            const forecasts = new Date(
                forecast.setDate(forecast.getDate() + i)
            );
            const forecastMonth = forecasts.getMonth() + 1;
            const forecastDate = forecasts.getDate();
            temp.push([`${forecastMonth}/${forecastDate}`]);
        }
        // axios
        //     .get(
        //         `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=5&appid=${weatehrKey}&units=metric`
        //     )
        //     .then((res) => {
        //         // console.log(res.data);
        //         setWeather(res.data.list[0].weather[0].main);
        //         setToday(`${Math.round(res.data.list[0].temp.day)}º`);
        //         for (let i = 0; i < 4; i++) {
        //             temp[i].unshift(
        //                 `${Math.round(res.data.list[i + 1].temp.day)}º`
        //             );
        //         }
        //         axios
        //             .get(
        //                 `https://api.openweathermap.org/data/2.5/forecast/daily?q=Seoul&cnt=5&appid=${weatehrKey}&units=metric`
        //             )
        //             .then((res) => {
        //                 for (let i = 0; i < 4; i++) {
        //                     temp[i].unshift(
        //                         `${Math.round(res.data.list[i + 1].temp.day)}º`
        //                     );
        //                 }
        //                 setTemperatures(temp);
        //             })
        //             .catch((err) => console.log(err));
        //     })
        //     .catch((err) => console.log(err));
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
        <div className='flex flex-col'>
            <span className='text-2xl'>날씨</span>
            <div className='flex'>
                <div className='w-20 h-32 mt-3 border border-grey rounded flex flex-col items-center'>
                    <span className='text-xs text-grey my-3'>현지 기온</span>
                    {weather === '' ? 'Loading...' : <WeatherComp />}
                    <span className='my-3 text-lg'>{today}</span>
                </div>
                <div className=' h-32 mt-3 border border-grey rounded flex flex-col items-center ml-5 w-full'>
                    <span className='text-xs text-grey my-3'>
                        일일 현지/대한민국 기온
                    </span>
                    <div className='flex justify-evenly w-full'>
                        {temperatures.length === 0
                            ? 'Loading...'
                            : temperatures.map(
                                  (temperature: any, index: number) => {
                                      return (
                                          <Information
                                              key={`info${index}`}
                                              korea={temperature[0]}
                                              local={temperature[1]}
                                              month={temperature[2]}
                                          />
                                      );
                                  }
                              )}
                    </div>
                </div>
            </div>
        </div>
    );
}
