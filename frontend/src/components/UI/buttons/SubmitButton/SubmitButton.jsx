import React from 'react';
import classes from './SubmitButton.module.scss';
import { Fade } from '@mui/material';
import { CircularProgress } from '@mui/joy';

const SubmitButton = ({ text, onClick, disabled = false, isLoading = false }) => {
  return (
    <button
      className={classes['submit-btn']}
      onClick={onClick}
      disabled={disabled}
    >
      <Fade
        in={!isLoading}
      >
        <span className={classes['submit-btn__text']}>{text}</span>
      </Fade>

      <Fade
        in={isLoading}
      >
        <CircularProgress
          variant="plain"
          color="neutral"
          sx={{
            "--CircularProgress-size": "25px",
            "--CircularProgress-trackThickness": "2px",
            "--CircularProgress-progressThickness": "2px",
            "--CircularProgress-progressColor": "#222222",
          }}
        />
      </Fade>
    </button>
  );
};

export default SubmitButton;