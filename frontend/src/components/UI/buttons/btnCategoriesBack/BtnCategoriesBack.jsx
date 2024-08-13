import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BtnCategoriesBack.module.scss';
import { ReactComponent as Arrow } from '../../../../assets/images/svg/arrow-right-thin.svg';

const BtnCategoriesBack = ({ children, path }) => {
  return (
    <Link to={path} className={classes['categories-back']}>
      <div className={classes['categories-back__image']}><Arrow/></div>
      <span className={classes['categories-back__text']}>{children}</span>
    </Link>
  );
};

export default BtnCategoriesBack;