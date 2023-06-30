import React from 'react';
import { WiDaySunnyOvercast } from 'react-icons/wi';
import { nanoid } from 'nanoid';

const ForecastWeather = ({ days, icons, dayNum, daysList }) => {
  const types = [
    'Clear',
    'Rain, Partially cloudy',
    'Overcast',
    'Partially cloudy',
  ];

  const getDay = (index) => {
    const num = dayNum + 1 + index;
    let day;
    if (num >= daysList.length) {
      day = daysList[num - 7];
    } else {
      day = daysList[num];
    }

    return day || 'MON';
  };

  return (
    <div className='forecast-container'>
      <div className='title'>Next 7 days...</div>
      <div className='forecast-days'>
        {days.map((day, index) => {
          if (index >= 7) return;
          return (
            <div className='day' key={nanoid()}>
              <div className='week-day'>{getDay(index)}</div>
              {icons[day.conditions] || icons['Overcast']}
              <div className='temp-day'>{day.temp}˚</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastWeather;
