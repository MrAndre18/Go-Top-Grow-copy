import React, { useState } from 'react';

const Image = ({
  src,
  alt,
  altImage,
  className
}) => {
  const
    [isFakePhoto, setIsFakePhoto] = useState(false)

  const errorHandler = e => {
    setIsFakePhoto(true)
  }

  return (
    <>
      {isFakePhoto ?
        altImage
        :
        <img
          className={className}
          onError={errorHandler}
          src={src}
          alt={alt}
        />
      }
    </>
  );
};

export default Image;