import React from 'react';
import './Card.scss';

const Card = ({ title, desc, img }) => {
  return (
    <div className="card">

      <div className="card__image">
        <img className='card__image-img' src={img} alt={title} />
      </div>

      <h3 className="f-h3 card__title">{title}</h3>
      <p className="f-body-1 card__desc">{desc}</p>
      
    </div>
  )
}

export default Card;