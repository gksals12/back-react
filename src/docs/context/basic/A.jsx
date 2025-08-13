import React from 'react';
import B from './B';

const A = ({name}) => {
  return (
    <div>
      <B name={name}></B>
    </div>
  );
};

export default A;