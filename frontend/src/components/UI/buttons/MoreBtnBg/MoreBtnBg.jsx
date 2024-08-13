import React from 'react';
import { Link } from 'react-router-dom';
import './MoreBtnBg.scss';

const MoreBtnBg = ({ children, path, onClick, className }) => {
  return (
    <Link
      className={`more-btn-bg ${className || ''}`}
      to={path}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MoreBtnBg;