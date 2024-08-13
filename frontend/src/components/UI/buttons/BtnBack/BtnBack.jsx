import React from 'react';
import classes from './BtnBack.module.scss';
import { ReactComponent as Arrow } from '../../../../assets/images/svg/pagination-arrow.svg';
import { useNavigate } from 'react-router-dom';

const BtnBack = ({ text, path }) => {
  const navigate = useNavigate()

  const clickHandler = e => {
    e.preventDefault()

    navigate(path || -1)
  }

  return (
    <button
      onClick={clickHandler}
      className={classes["button-back"]}
    >
      <div className={classes["button-back__circle"]}>
        <div className={classes["button-back__circle-img"]}>
          <Arrow />
        </div>
      </div>

      <span className={classes["button-back__text"]}>{text}</span>
    </button>
  );
};

export default BtnBack;