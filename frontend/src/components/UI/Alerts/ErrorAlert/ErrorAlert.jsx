import React from 'react';
import classes from './ErrorAlert.module.scss';
import { Report } from '@mui/icons-material';

const ErrorAlert = ({
  description = "There was an error loading data. Try it later"
}) => {
  return (
    <div className={classes['error']}>
      <div className={classes["error-img"]}>
        <Report />
      </div>

      <div className={classes["error-content"]}>
        <p className={classes["error-title"]}>Error</p>
        <p className={classes["error-description"]}>{description}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;