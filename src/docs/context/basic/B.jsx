import React from 'react';
import C from './C';
import CharContext from './CharContext'

const B = ({name}) => {
  return (
    <div>
      <C name={name}></C>
      <CharContext.Consumer>
        {(context)=> (
          <p style={{color: context.color}}>B의글자</p>
        )}
      </CharContext.Consumer>
    </div>
  );
};

export default B;