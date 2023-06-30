import React from 'react';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import { fetchData } from '../queryGlobalHooks';
import { getContext } from '../Context';
import {
  WiDayRainWind,
  WiDayCloudy,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiHail,
} from 'react-icons/wi';

const index = () => {
  const { search } = getContext();

  const { isLoading, data, isError } = fetchData(search);
  const date = new Date();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const icons = {
    Clear: <WiDaySunny className='icon-day' />,
    'Rain, Partially cloudy': <WiDayRainWind className='icon-day' />,
    Overcast: <WiDaySunnyOvercast className='icon-day' />,
    'Partially cloudy': <WiDayCloudy className='icon-day' />,
    Rain: <WiHail className='icon-day' />,
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  console.log(data);

  return (
    <div className='weather-container'>
      <CurrentWeather
        current={data.currentConditions}
        dayString={days[date.getDay()]}
        icons={icons}
      />
      <ForecastWeather
        days={data.days}
        icons={icons}
        dayNum={date.getDay()}
        daysList={days}
      />
    </div>
  );
};

export default index;
