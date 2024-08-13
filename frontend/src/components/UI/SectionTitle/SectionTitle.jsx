import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ children, subtitle }) => {
  return (
    <div className="section__title">
      <h2 className='f-h2 section__title-text'>
        {children}
      </h2>

      {subtitle &&
        <div className="section__title-subtitle">
          {subtitle}
        </div>
      }
    </div>
  )
}

export default SectionTitle