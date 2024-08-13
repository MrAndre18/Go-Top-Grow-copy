import React from 'react';
import './PageHero.scss';
import CircleDecor from '../UI/CircleDecor/CircleDecor';

const PageHero = ({ title, desc, img }) => {
  return (
    <div className='hero'>

      <div className="hero__content">
        <h1 className="f-h1 hero__title">{title}</h1>
        <p className="f-body-1 hero__desc">{desc}</p>
      </div>

      <div className="hero__img">{img}</div>

      <CircleDecor
        color='dark-green'
        style={{
          width: 550,
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: -1
        }}
        blur={100}
      />
    </div>
  )
}

export default PageHero;