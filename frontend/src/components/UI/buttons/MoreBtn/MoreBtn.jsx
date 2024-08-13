import React from 'react';
import classes from './MoreBtn.module.scss';
import { Link } from 'react-router-dom';

const MoreBtn = ({ text, path, onClick }) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={classes['more-btn']}
    >
      <span className={classes['more-btn__text']}>{text}</span>
    </Link>
  );
};

export default MoreBtn;