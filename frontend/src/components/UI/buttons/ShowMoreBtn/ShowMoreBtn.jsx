import React from 'react';
import classes from './ShowMoreBtn.module.scss';

const ShowMoreBtn = ({ children, onClick }) => {
  return (
    <button
      className={classes['show-more-btn']}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ShowMoreBtn;