import React from 'react';
import A from './A';
import CharContext from './CharContext'

const CharContainer = () => {
  const name = "장보고"
  return (
    <div>
      <CharContext.Provider value={"홍길동"} color={"red"}>
        <A name={name}></A>
      </CharContext.Provider>
    </div>
  );
};

export default CharContainer;