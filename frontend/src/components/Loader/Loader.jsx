import React, { useEffect, useState } from 'react';
import './Loader.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { animateScroll as scroll } from 'react-scroll';

const Logo = () => {
  return (
    <div className="loader__logo">
      <span className="loader__logo-title">EmiratesLaw</span>
      <span className="loader__logo-subtitle">Real Help</span>
    </div>
  )
}

const Loader = () => {
  const
    [loading, setLoading] = useState(true),
    [percentage, setPercentage] = useState(0),

    // Settings
    loadingDuration = 2500

  useEffect(() => {
    setTimeout(() => {
      setPercentage(100)

      setTimeout(() => {
        setLoading(false)
        scroll.scrollToTop({
          duration: 0
        });
      }, loadingDuration + 100);
    }, 300);
  }, [])

  return (
    <div className={`loader ${loading ? '' : 'hidden'}`}>
      <CircularProgressbarWithChildren
        className="loader__content"
        value={percentage}
        styles={{
          path: {
            transition: `stroke-dashoffset ${loadingDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`
          }
        }}
      >
        <Logo />
      </CircularProgressbarWithChildren>
    </div >
  );
};

export default Loader;