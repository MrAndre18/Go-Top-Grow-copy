import React from 'react';
import classes from './Download.module.scss';
import { ReactComponent as Img } from '../../../../assets/images/svg/download.svg';
import { Link } from 'react-router-dom';

const Download = ({ text, file }) => {
  return (
    <a
      className={classes["download"]}
      href={file}
      download
    >
      <span className={classes["download-text"]}>{text}</span>
      <div className={classes["download-img"]}>
        <Img />
      </div>
    </a>
  );
};

export default Download;