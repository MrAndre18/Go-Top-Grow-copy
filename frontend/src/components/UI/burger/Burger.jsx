import React from 'react';
import './Burger.scss';

const Burger = ({ isActive, onClick }) => {
  return (
    <div
      className={`burger${isActive ? ' burger--active' : ''}`}
      onClick={onClick}
    >
      <div className='burger-circle'></div>
      <div className='burger-item'></div>
    </div>
  );
};

export default Burger;