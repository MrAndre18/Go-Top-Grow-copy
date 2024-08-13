import React from 'react';
import classes from './DataLoader.module.scss';
import { CircularProgress } from '@mui/joy';

const DataLoader = () => {
  return (
    <div className={classes['data-loader']}>
      <CircularProgress
        variant="plain"
        color="neutral"
        sx={{
          "--CircularProgress-size": "50px",
          "--CircularProgress-trackThickness": "4px",
          "--CircularProgress-progressThickness": "4px",
          "--CircularProgress-progressColor": "#EDF8FF",
        }}
      />
    </div>
  );
};

export default DataLoader;