import React from 'react';

const Section = ({ title, children, style }) => {
  return (
    <div>
      <h1 style={style}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
