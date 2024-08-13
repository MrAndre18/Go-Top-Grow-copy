import React from 'react';
import classes from './ClearBtn.module.scss';
import { AutorenewRounded } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const ClearBtn = ({ text, path, onClick }) => {
  const
    location = useLocation()

  return (
    <Link
      onClick={onClick}
      to={path || location.pathname + location.search + location.hash}
      className={classes["btn-clear"]}
    >
      <div className={classes["btn-clear__img"]}>
        <AutorenewRounded />
      </div>
      <span className={classes["btn-clear__text"]}>
        {text}
      </span>
    </Link>
  );
};

export default ClearBtn;