import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { getContext } from '../Context';

const Toggle = () => {
  const { isDark, toggleDark } = getContext();

  return (
    <div className='toggle-theme' onClick={toggleDark}>
      {isDark ? (
        <FaMoon className='icon-theme moon' />
      ) : (
        <FaSun className='icon-theme' />
      )}
    </div>
  );
};

export default Toggle;
