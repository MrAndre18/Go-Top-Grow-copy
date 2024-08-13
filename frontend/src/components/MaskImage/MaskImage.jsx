import React from 'react';
import './MaskImage.scss';

const MaskImage = ({ children, className, backgroundImage, mask="linear-gradient(to top, rgba(64, 64, 64, 0.3), rgba(64, 64, 64, 0.3))" }) => {
  return (
    <div
      style={{ backgroundImage: `${mask}, url(${backgroundImage})` }}
      className={[className, 'mask'].join(' ')}
    >
      {children}
    </div>
  );
};

export default MaskImage;