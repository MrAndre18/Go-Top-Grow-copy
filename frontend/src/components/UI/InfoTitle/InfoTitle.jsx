import React from 'react';
import classes from './InfoTitle.module.scss';

const InfoTitle = ({ children }) => {
  return (
    <h2 className={classes['info-title']}>
      {children}
    </h2>
  );
};

export default InfoTitle;