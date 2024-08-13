import React from 'react';
import './Title.scss';

const Title = ({ title }) => {
  return (
    <section className="title">
      <h1 className="title-text">{title}</h1>
    </section>
  );
};

export default Title;