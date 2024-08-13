import React, { useState } from 'react';
import classes from './ToTopBtn.module.scss';
import { animateScroll as scroll } from 'react-scroll';
import { ReactComponent as Arrow } from '../../../../assets/images/svg/arrow-right-thin.svg';
import { Fade } from '@mui/material';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const ToTopBtn = () => {
  const
    { scrollY } = useScroll(),
    [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > document.documentElement.clientHeight ?
      setIsVisible(true) :
      setIsVisible(false)
  })

  return (
    <Fade in={isVisible}>
      <div className={classes['to-top-btn__wrapper']}>
        <button
          onClick={scrollToTop}
          className={classes['to-top-btn']}
        >
          <div className={classes['to-top-btn__img']}>
            <Arrow />
          </div>
        </button>
      </div>
    </Fade>
  );
};

export default ToTopBtn;