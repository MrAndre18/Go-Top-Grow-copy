import React, { useState } from 'react';
import './Services.scss';
import { services } from '../../utils/services';
import CircleDecor from '../UI/CircleDecor/CircleDecor';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';

const Services = () => {
  const
    [activeIndex, setActiveIndex] = useState(0),
    size_768 = useMediaQuery('(min-width:768px)')

  return (
    <ul className='services'>

      {services.map((item, index) =>
        <motion.li
          key={item.id}
          className="services-item"
          style={{ position: 'relative' }}
          onMouseEnter={() => setActiveIndex(index)}
        >

          {size_768 && activeIndex === index &&
            <CircleDecor
              color='green'
              blur={20}
              style={{
                height: '150%',
                left: 80,
                top: '-25%'
              }}
              isMotion={true}
              layoutId='activeServicesItem'
            />
          }

          <ServicesItem
            href={item.href}
            category={item.category}
            number={item.number}
            title={item.title}
            desc={item.description}
            img={item.img}
          />
        </motion.li>
      )}

    </ul>
  )
}

export default Services;

const ServicesItem = ({ href, category, number, title, desc, img }) => {
  return (
    <a href={href} className="services__item">
      <div className="services__item-category-block">
        <p className="f-h2 services__item-category">{category}</p>
        <span className="f-body-1 services__item-number">{number}</span>
      </div>

      <div className="services__item-desc">
        <h3 className="f-h3 services__item-title">{title}</h3>
        <div className="services__item-text">
          {desc.map(paragraph =>
            <p
              key={paragraph.id}
              className="f-body-2 services__item-paragraph"
            >
              {paragraph.text}
            </p>
          )}
        </div>
      </div>

      <div className="services__item-image">
        <div className="services__item-image-wrapper">
          <img
            className="services__item-image-img"
            src={img}
            alt={title}
          />
        </div>
      </div>
    </a>
  )
}