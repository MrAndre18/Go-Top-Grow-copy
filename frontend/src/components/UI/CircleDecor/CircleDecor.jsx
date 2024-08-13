import React from 'react';
import './CircleDecor.scss';
import { motion } from 'framer-motion';

const CircleDecor = ({
  className,
  color = 'grey' || 'green' || 'dark-green' || 'black',
  blur = 200,
  style,
  isMotion = false,
  layoutId
}) => {
  return (
    isMotion ?
      <motion.div
        className={`decorator-circle decorator-circle--${color} ${className ? className : ''}`}
        style={{
          filter: `blur(${blur}px)`,
          ...style
        }}
        layoutId={layoutId}
      />
      :
      <div
        className={`decorator-circle decorator-circle--${color} ${className ? className : ''}`}
        style={{
          filter: `blur(${blur}px)`,
          ...style
        }}
      />
  )
}

export default CircleDecor;