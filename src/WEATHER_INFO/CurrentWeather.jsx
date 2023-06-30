import React from 'react';
import { WiDaySprinkle } from 'react-icons/wi';
import { getContext } from '../Context';

const CurrentWeather = ({ current, dayString, icons }) => {
  const { search } = getContext();
  const { conditions, temp, feelslike } = current;
  const date = new Date();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return (
    <div className='current-info-container'>
      <div className='date-place'>
        <div className='date'>
          {dayString} {date.getDate()}
        </div>
        <div className='place'>Today in {search}</div>
      </div>
      <div className='condition-container'>
        <div className='condition-icon'>
          {icons[conditions] || icons['Overcast']}
        </div>
        <div className='condition-info'>{conditions}</div>
      </div>
      <div className='temperature-container'>
        <div className='real-temp'>{temp}˚</div>
        <div className='feels-temp'>Feels like {feelslike}˚</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
