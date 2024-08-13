import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MoreBtnArrow.module.scss';
import { ReactComponent as Arrow } from '../../../../assets/images/svg/arrow-right-thin.svg';

const MoreBtnArrow = ({ text, path }) => {
  return (
    <Link to={path} className={classes['more-btn-arrow']}>
      <span className={classes['more-btn-arrow__text']}>{text}</span>
      <div className={classes['more-btn-arrow__img']}><Arrow /></div>
    </Link>
  );
};

export default MoreBtnArrow;