import React from 'react';
import './LinkCircle.scss';
import { Link } from 'react-router-dom';

const LinkCircle = ({ path, img }) => {
  return (
    <Link to={path} target="_blank" className='link--circle'>
      <div className='link--circle__img'>
        {img}
      </div>
    </Link>
  )
}

export default LinkCircle;