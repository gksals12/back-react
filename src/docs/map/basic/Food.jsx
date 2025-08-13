import React from 'react';

const Food = ({food}) => {
  const {name} = food
  return (
    <li>
      {name}
    </li>
  );
};

export default Food;