import React from 'react';
import classes from './HideBtn.module.scss';

const HideBtn = ({ children, onClick }) => {
  return (
    <button
      className={classes['hide-btn']}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HideBtn;