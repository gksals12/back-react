import React, { useContext } from 'react';
import {FontContext} from './FontContext';

const FontSizeComponent = () => {
  const {state, actions} = useContext(FontContext)
  const {setFontSize} = actions
  const {fontSize} = state;

  const sizeUp = (e) =>{
    if(e.key === 'Enter'){
      setFontSize(e.target.value + "px")
    }
  }
  return (
    <div>
      <p style={{fontSize}}>최하위컴포넌트!</p>
      {/* 
        사용자가 글자의 크기를 입력 후 엔터를 치면
        입력한 크기로 글자 크기 변경
      */}
      <input onKeyDown={sizeUp} type="text" />
      <button onClick={() => setFontSize("100px")}>버튼</button>
    </div>
  );
};

export default FontSizeComponent;