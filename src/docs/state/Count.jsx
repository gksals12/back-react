import React, { useState } from 'react';

const Count = () => {
  console.log("usestate",useState())
  // let number = 0
  
  // const nubmer = useState()[0]
  // const setNumber = useState()[1]
  const [number, setNumber] = useState(0)
  // console.log(number)
  console.log(setNumber)

  const increase = (e) => {
   setNumber(number + 1)
  }

  const decrease = (e) => {
   setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1증가</button>
      <button onClick={decrease}>+1증가</button>
    </div>
  );
};

export default Count;